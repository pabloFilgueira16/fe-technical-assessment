import type { Workflow } from "../../../types/workflow";
import Body from "../../../components/body";
import dayjs from "dayjs";
import RelativeTime from "dayjs/plugin/relativeTime";
import Tags from "../../../components/tags";
dayjs.extend(RelativeTime);

interface WorkFlowTableProps {
  workflows: Workflow[];
}

const titleClasses = "small-title-bold px-2 py-4 text-left whitespace-nowrap";

const WorkFlowTable: React.FC<WorkFlowTableProps> = ({ workflows }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-spacing-0 border-collapse w-full">
        <thead>
          <tr className="border-b border-border-primary">
            <th className={titleClasses}>Type</th>
            <th className={titleClasses}>Name</th>
            <th className={titleClasses}>Tags</th>
            <th className={titleClasses}>Last updated</th>
            <th className={titleClasses}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {workflows.map((workflow) => (
            <tr
              key={workflow.id}
              className="border-b border-border-primary hover:bg-gray-50"
            >
              <td className="px-4 py-[22px] text-left">
                <Body
                  className="whitespace-nowrap first-letter:uppercase"
                  variant="sm"
                  styleType="regular"
                  color="light"
                >
                  {workflow.type}
                </Body>
              </td>
              <td className="px-4 py-[22px] text-left w-full">
                <Body
                  className="whitespace-nowrap"
                  variant="md"
                  styleType="medium"
                >
                  {workflow.name}
                </Body>
              </td>
              <td className="px-4 py-[22px] text-left tags">
                <Tags tags={workflow.tags} />
              </td>
              <td className="px-4 py-[22px] text-left">
                <Body
                  className="first-letter:uppercase whitespace-nowrap"
                  variant="sm"
                  styleType="regular"
                  color="light"
                >
                  {dayjs(workflow.lastUpdated).fromNow()}
                </Body>
              </td>
              <td className="px-4 py-[22px] text-left">
                <button className="text-blue-600 hover:underline">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkFlowTable;
