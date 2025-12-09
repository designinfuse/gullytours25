export default function CityExplorerIntroSection() {
  return (
    <section className="w-full overflow-hidden bg-[#B23F27] px-6 py-20 md:px-12 md:py-32 lg:px-24">
      <div className="mx-auto flex max-w-[1440px] items-center justify-center">
        {/* Content Container */}
        <div className="flex w-full max-w-[886px] flex-col items-center gap-9">
          {/* Decorative Element - Hidden on mobile */}
          <div className="h-[200px] w-[200px] border-8 border-[#F5EF86] bg-[#D9D9D9] xl:block" />

          {/* Title */}
          <h2 className="w-full max-w-[876px] text-center font-rajdhani text-[64px] font-semibold leading-[1.071em] text-white md:text-[84px]">
            From explorer to host, one walk at a time.
          </h2>

          {/* Body Text */}
          <div className="text-center font-rajdhani text-[20px] font-medium leading-[1.5em] text-white md:text-[24px]">
            <p>
              City Explorer is Gully Tours' flagship program for anyone curious
              about designing and leading experiences in their city. Think of it
              as a crash course in hosting—with stories, streets, and a dash of
              passion. Whether you're in it for fun, for learning, or to make
              some extra income on the side, this program helps you bring your
              city to life for others.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
