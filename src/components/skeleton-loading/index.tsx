type SkeletonLoaderProps = {
  height?: string | number;
  width?: string | number;
};

const SkeletonLoader = ({ height = '1em', width = '100%' }: SkeletonLoaderProps) => {
  return (
    <div
      className="animate-pulse bg-gray-300 rounded"
      style={{ height, width }}
    />
  );
};

export default SkeletonLoader;