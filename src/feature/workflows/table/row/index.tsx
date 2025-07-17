import dayjs from "dayjs";
import RelativeTime from "dayjs/plugin/relativeTime";
import Body from "../../../../components/body";
import Tags from "../../../../components/tags";
import type { Workflow } from "../../../../types/workflow";
dayjs.extend(RelativeTime);

interface RowProps {
  workflow: Workflow;
}

const WorkFlowRow: React.FC<RowProps> = ({ workflow }) => (
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
    <td className="px-4 py-[22px] text-left ">
      <Body className="whitespace-nowrap" variant="md" styleType="medium">
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
);

export default WorkFlowRow;
