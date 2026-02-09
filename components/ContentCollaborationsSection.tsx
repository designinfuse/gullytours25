import PerforatedCard from "@/components/PerforatedCard";

interface CollaborationCardData {
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
  rotation?: string;
}

const cards: CollaborationCardData[] = [
  {
    title: "Turn the city into your studio",
    description:
      "From narrow gullies to grand facades, we help you find stories that look great and feel real.",
    bgColor: "#F7F8DF",
    textColor: "#4F8C7D",
    borderColor: "#4F8C7D",
    rotation: "lg:-rotate-2",
  },
  {
    title: "Go beyond the grid",
    description:
      "Forget staged sets. Walk with us, capture moments, and let the city do the storytelling.",
    bgColor: "#4F8C7D",
    textColor: "#F7F8DF",
    borderColor: "#F7F8DF",
    rotation: "lg:rotate-2",
  },
  {
    title: "Co-create with character",
    description:
      "Your brand brings the vibe, we bring the stories — together, we make content that stands out.",
    bgColor: "#B23F27",
    textColor: "#F7F8DF",
    borderColor: "#F7F8DF",
    rotation: "",
  },
  {
    title: "Make every collab an experience",
    description:
      "Not just posts. Not just reels. Real stories that your audience will remember.",
    bgColor: "#F5EF86",
    textColor: "#B23F27",
    borderColor: "#B23F27",
    rotation: "lg:rotate-3",
  },
];

function CollaborationTicketCard({
  title,
  description,
  bgColor,
  textColor,
  borderColor,
  rotation = "",
}: CollaborationCardData) {
  return (
    <div className={`w-full max-w-[480px] ${rotation}`}>
      <PerforatedCard
        bgColor={bgColor}
        edges={{ left: true, right: true }}
        perforationSize={6}
        perforationSpacing={20}
        className="h-full w-full px-3 py-4 sm:px-4 sm:py-6"
      >
        {/* Double border container */}
        <div
          className="rounded-sm p-1"
          style={{ border: `1px solid ${borderColor}` }}
        >
          <div
            className="flex min-h-[100px] flex-col items-center justify-center rounded-sm px-3 py-4 text-center sm:min-h-[110px] sm:px-4 sm:py-6"
            style={{ border: `1px solid ${borderColor}` }}
          >
            <h3
              className="font-rajdhani text-base font-bold uppercase leading-tight sm:text-lg md:text-xl"
              style={{ color: textColor }}
            >
              {title}
            </h3>
            <p
              className="mt-2 font-rajdhani text-sm font-medium leading-snug sm:text-base"
              style={{ color: textColor }}
            >
              {description}
            </p>
          </div>
        </div>
      </PerforatedCard>
    </div>
  );
}

export default function ContentCollaborationsSection() {
  return (
    <section className="w-full bg-[#EDEDE7] px-4 py-24 md:py-32 lg:pb-[200px] lg:pt-[200px]">
      <div className="mx-auto max-w-6xl">
        {/* Title */}
        <h2 className="mb-12 text-center font-rajdhani text-3xl font-bold uppercase leading-tight text-black sm:text-4xl md:mb-16 md:text-5xl lg:mb-20 lg:text-6xl">
          What Content
          <br />
          Collaborations can do
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-2">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`flex justify-center ${
                index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
              }`}
            >
              <CollaborationTicketCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
