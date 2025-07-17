import SkeletonLoader from "../../../../components/skeleton-loading";

const WorkFlowRowLoading: React.FC = () => (
  <tr className="border-b border-border-primary">
    <td className="px-4 py-[22px]">
      <SkeletonLoader />
    </td>
    <td className="px-4 py-[22px]">
      <SkeletonLoader width={`${Math.random() * 100}%`} />
    </td>
    <td className="px-4 py-[22px]">
      <SkeletonLoader />
    </td>
    <td className="px-4 py-[22px]">
      <SkeletonLoader />
    </td>
    <td className="px-4 py-[22px]">
      <SkeletonLoader />
    </td>
  </tr>
);

export default WorkFlowRowLoading;
