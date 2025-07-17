import { useCallback, useEffect, useState } from "react";
import AirOps from "@airops/airops-js";

interface useAuthnticaenedInstanceProps {
  userId: string;
  workspaceId: number;
}

// @deprecated: I did it because I was not able to use non auth instance, I left just to show how I was planning to use it
export function useAuthenticatedInstance({
  userId,
  workspaceId,
}: useAuthnticaenedInstanceProps) {
  const [airOpsInstance, setOirOpsInstance] = useState<AirOps | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // airops already takes care of handling multiple instances, but we should avoid making this request multiple times
  const fetchHashedUserId = useCallback(async () => {
    try {
      // get base url from .env file
      const response = await fetch(`http://localhost:3001/hash_user/${userId}`);
      const data = await response.json();
      return data.hashedUserId;
    } catch (err) {
      setError(err as Error);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [userId]);

  const initializeAirops = useCallback(async () => {
    setIsLoading(true);
    const hashedUserId = await fetchHashedUserId();
    if (!hashedUserId) return;

    try {
      const airOpsInstance = AirOps.identify({
        userId,
        workspaceId,
        hashedUserId,
      });
      setOirOpsInstance(airOpsInstance);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  }, [userId, workspaceId, fetchHashedUserId]);

  useEffect(() => {
    initializeAirops();
  }, [userId, workspaceId, initializeAirops]);

  return { airOpsInstance, error, isLoading };
}

export default useAuthenticatedInstance;
