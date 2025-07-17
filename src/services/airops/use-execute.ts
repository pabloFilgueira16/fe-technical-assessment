import { useCallback, useEffect, useState } from "react";
import AirOps from "@airops/airops-js";
import type { Workflow } from "../../types/workflow";

interface UseExecuteProps {
  airOpsInstance: AirOps;
  payload: Record<string, unknown>;
  appId: string;
  version?: number;
}

export function useExecute({
  airOpsInstance,
  payload,
  appId,
  version,
}: UseExecuteProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<Workflow[]>([]);

  // const isLoading = false; // Placeholder for loading state, can be replaced with actual loading logic

  const executeAction = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    if (!airOpsInstance) return;

    try {
      const response = await airOpsInstance.apps.execute({
        appId,
        version,
        payload,
      });
      const result = await response.result();
      const content = result.output;
      setData(content as Workflow[]);
      setIsLoading(false);
      // TODO: remove Debugging output
      console.log("Workflow data:", content);
    } catch (err) {
      setError(err as Error);
    }
  }, [airOpsInstance, payload]);

  useEffect(() => {
    if (airOpsInstance) {
      executeAction();
    }
  }, [airOpsInstance]);

  return { isLoading, error, data, retrigger: executeAction };
}

export default useExecute;
