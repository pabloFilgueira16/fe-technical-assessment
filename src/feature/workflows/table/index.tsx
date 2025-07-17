import AirOps from "@airops/airops-js";
import { useMemo } from "react";
import Body from "../../../components/body";
import useExecute from "../../../services/airops/use-execute";
import WorkFlowRow from "./row";
import WorkFlowRowLoading from "./row/loading";


const titleClasses = "small-title-bold px-2 py-4 text-left whitespace-nowrap";

const WorkFlowTable: React.FC = () => {
  const airOpsInstance = useMemo(() => {
    return new AirOps();
  }, []);

  const {
    isLoading,
    error,
    data: workflows,
  } = useExecute({
    airOpsInstance,
    appId: "b13dd505-2573-4f5d-8da6-ad7d3348ac70",
    version: 1,
    payload: {
      inputs: {
        filter: "Workflow",
      },
    },
  });

  if (error) {
    return (
      <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-border-primary py-12 text-center">
        <Body className="text-red-600">Error loading workflows</Body>
      </div>
    );
  }

  if (!isLoading && !workflows?.length && !error) {
    return (
      <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-border-primary py-12 text-center">
        <Body>Nothing here yet...</Body>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto px-4">
      <table className="min-w-full border-spacing-0 border-collapse w-full">
        <thead>
          <tr className="border-b border-border-primary">
            <th className={`${titleClasses} min-w-[100px]`}>Type</th>
            <th className={`${titleClasses} w-full`}>Name</th>
            <th className={`${titleClasses} min-w-[100px]`}>Tags</th>
            <th className={`${titleClasses} min-w-[100px]`}>Last updated</th>
            <th className={`${titleClasses} min-w-[85px]`}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {isLoading &&
            Array.from({ length: 5 }).map((_, index) => (
              <WorkFlowRowLoading key={index} />
            ))}

          {!isLoading &&
            workflows?.map((workflow) => (
              <WorkFlowRow key={workflow.id} workflow={workflow} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkFlowTable;
