import dayjs from "dayjs";
import RelativeTime from "dayjs/plugin/relativeTime";
import Body from "../../../../components/body";
import Tags from "../../../../components/tags";
import type { Workflow } from "../../../../types/workflow";
import Button from "../../../../components/button";
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
      <span className="flex items-center gap-2">
        <Button
          variant="icon"
          iconName="edit"
          onClick={() => alert("not implemented yet")}
        />
        <Button
          variant="icon"
          iconName="trash"
          onClick={() => alert("not implemented yet")}
        />
      </span>
    </td>
  </tr>
);

export default WorkFlowRow;
