import Image from "next/image";

interface CollaborationCardProps {
  title: string;
  imageSrc: string;
  isBack?: boolean;
}

function CollaborationCard({ title, imageSrc, isBack = false }: CollaborationCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${
        isBack
          ? "h-[280px] w-[170px] sm:h-[320px] sm:w-[200px] lg:h-[409px] lg:w-[253px]"
          : "h-[340px] w-[210px] sm:h-[400px] sm:w-[250px] lg:h-[500px] lg:w-[310px]"
      }`}
    >
      {/* Image */}
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover"
      />

      {/* Play Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 sm:h-12 sm:w-12">
          <svg
            className="ml-1 h-4 w-4 text-gray-600 sm:h-5 sm:w-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Title Footer - only for front card */}
      {!isBack && (
        <div className="absolute bottom-0 left-0 right-0 rounded-b-2xl bg-[#f6f6f6] px-4 py-4 sm:py-6 lg:py-8">
          <h4 className="font-rajdhani text-lg font-bold uppercase leading-tight text-[#4F8C7D] sm:text-xl lg:text-2xl">
            {title}
          </h4>
        </div>
      )}
    </div>
  );
}

interface CollaborationColumnProps {
  type: "content" | "walk";
  bgColor: string;
  title: string;
  subtitle: string;
  frontCard: { title: string; imageSrc: string };
  backCard: { imageSrc: string };
  reversed?: boolean;
}

function CollaborationColumn({
  bgColor,
  title,
  subtitle,
  frontCard,
  backCard,
  reversed = false,
}: CollaborationColumnProps) {
  return (
    <div
      className={`flex flex-col items-center overflow-hidden px-4 py-10 sm:py-14 lg:py-14 ${bgColor}`}
    >
      {/* Header */}
      <div className="mb-8 flex flex-col items-center gap-3 text-center text-white sm:mb-10 lg:mb-12">
        <h3 className="font-rajdhani text-2xl font-bold uppercase leading-tight sm:text-3xl lg:text-[35px] lg:leading-[32px]">
          {title}
        </h3>
        <p className="font-rajdhani text-base font-semibold sm:text-lg lg:text-xl">
          {subtitle}
        </p>
      </div>

      {/* Cards Container */}
      <div className="relative flex h-[360px] w-full max-w-[400px] items-center justify-center sm:h-[420px] lg:h-[520px] lg:max-w-[540px]">
        {/* Back Card */}
        <div
          className={`absolute ${
            reversed
              ? "right-0 sm:right-4 lg:right-0"
              : "left-0 sm:left-4 lg:left-0"
          } top-1/2 -translate-y-1/2`}
        >
          <CollaborationCard
            title=""
            imageSrc={backCard.imageSrc}
            isBack
          />
        </div>

        {/* Front Card */}
        <div
          className={`absolute ${
            reversed
              ? "left-0 sm:left-4 lg:left-0"
              : "right-0 sm:right-4 lg:right-0"
          } top-1/2 -translate-y-1/2`}
        >
          <CollaborationCard
            title={frontCard.title}
            imageSrc={frontCard.imageSrc}
          />
        </div>
      </div>
    </div>
  );
}

export default function CollaborationsTypesSection() {
  return (
    <section className="grid w-full grid-cols-1 md:grid-cols-2">
      {/* Content Collaborations - Orange */}
      <CollaborationColumn
        type="content"
        bgColor="bg-[#DE6D11]"
        title="Content Collaborations"
        subtitle="CURATE STORIES WITH US"
        frontCard={{
          title: "Area Meals",
          imageSrc: "/curated-walks-3.jpg",
        }}
        backCard={{
          imageSrc: "/curated-walks-4.jpg",
        }}
      />

      {/* Walk Collaborations - Dark Red */}
      <CollaborationColumn
        type="walk"
        bgColor="bg-[#B23F27]"
        title="Walk Collaborations"
        subtitle="CURATE WALKS WITH US"
        frontCard={{
          title: "Govt. of Karnataka Vidhan Soudha",
          imageSrc: "/curated-walks-5.jpg",
        }}
        backCard={{
          imageSrc: "/curated-walks-1.jpg",
        }}
        reversed
      />
    </section>
  );
}
