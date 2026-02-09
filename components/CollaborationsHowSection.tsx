export default function CollaborationsHowSection() {
  return (
    <section className="w-full bg-[#EDEDE7] px-4 pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-[174px] lg:pb-[91px]">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 text-center">
        {/* Title */}
        <h2 className="font-rajdhani text-3xl font-bold uppercase leading-tight text-[#262626] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          How can you
          <br />
          collaborate with us?
        </h2>

        {/* Subtitle */}
        <p className="max-w-2xl font-rajdhani text-lg font-semibold leading-relaxed text-black sm:text-xl md:text-2xl md:leading-[1.3]">
          There are two ways to make it happen — create stories
          with us, or curate walks with us.
        </p>
      </div>
    </section>
  );
}
