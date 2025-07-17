import { useMemo } from "react";
import type { Tag } from "../../types/tags";
import Body from "../body";

interface FontProps extends React.HTMLAttributes<HTMLSpanElement> {
  tags: Tag[];
}

const ColorSquare: React.FC<{ color: string }> = ({ color }) => (
  <span
    className="inline-block w-2 h-2 rounded"
    style={{ backgroundColor: color }}
  ></span>
);

const Colors: React.FC<{ colors: string[] }> = ({ colors }) => {
  return (
    <span className="flex justify-between max-w-[24px] gap-1">
      {colors.map((color, idx) => (
        <ColorSquare key={idx} color={color} />
      ))}
    </span>
  );
};

const Tags: React.FC<FontProps> = ({ tags }) => {

  const colors = useMemo(() => {
    return tags.map(tag => tag.color);
  }, [tags]);

  if (tags.length === 0) {
    return <span className="text-gray-500 opacity-10 hover:opacity-100 transition-opacity">Add Tags</span>
  } else {
    return (
      <div className="inline-flex items-center px-2 py-1 border border-border-primary rounded-full gap-2 bg-white">
        <Colors colors={colors} />
        <Body className="whitespace-nowrap" variant="sm" styleType="semi-bold">
          {tags.length > 1 ? `${tags.length} tags` : tags[0].name}
        </Body>
      </div>
    );
  }
};

export default Tags;
