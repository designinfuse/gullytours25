export default function TourSkeleton() {
  return (
    <div className="relative flex w-[440px] animate-pulse flex-col bg-gray-300">
      {/* Image placeholder */}
      <div className="relative h-[430px] w-full bg-gray-400 p-4">
        {/* Location badge placeholder */}
        <div className="h-[33px] w-[137px] bg-gray-200" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-2 px-4 pb-6 pt-6">
        {/* Title placeholder */}
        <div className="space-y-2">
          <div className="h-8 w-[300px] bg-gray-400" />
          <div className="h-8 w-[250px] bg-gray-400" />
        </div>

        {/* Divider */}
        <div className="my-1 h-[1px] w-full bg-gray-400" />

        {/* Subtitle placeholder */}
        <div className="h-6 w-[350px] bg-gray-400" />

        {/* Price and Button Row */}
        <div className="mt-2 flex items-center justify-between">
          <div className="h-6 w-[140px] bg-gray-400" />
          <div className="h-[40px] w-[120px] rounded-2xl bg-gray-400" />
        </div>
      </div>
    </div>
  );
}
