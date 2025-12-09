export default function GivingBackSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#DE6D11] px-6 py-20 md:px-12 md:py-32 lg:px-24">
      <div className="mx-auto flex max-w-[1440px] items-center justify-center">
        {/* Content Container */}
        <div className="flex w-full max-w-[886px] flex-col items-center gap-6">
          {/* Title */}
          <h2 className="w-full max-w-[876px] text-center font-rajdhani text-[64px] font-semibold leading-[1.071em] text-white md:text-[84px]">
            We believe in
            <br />
            giving back
          </h2>

          {/* Body Text */}
          <div className="text-center font-rajdhani text-[20px] font-medium leading-[1.5em] text-white md:text-[24px]">
            <p className="mb-6">
              We open up the city to those who rarely get to experience its
              magic. Through curated free city walks for children, people with
              disabilities, and young learners, we offer new ways to see, hear,
              and feel their city.
            </p>
            <p>
              You can sponsor a walk for one of our NGO partners or an
              organization close to your heart — we&apos;ll handle everything from
              curation to logistics, ensuring every participant discovers the
              city through a fresh, inclusive lens.
            </p>
          </div>
        </div>

        {/* Decorative Elements - Hidden on mobile */}
        <div className="absolute right-[187px] top-[75px] hidden h-[200px] w-[200px] border-8 border-[#F5EF86] bg-[#D9D9D9] xl:block" />
        <div className="absolute right-[55px] top-[215px] hidden h-[200px] w-[200px] border-8 border-[#F5EF86] bg-[#D9D9D9] xl:block" />
      </div>
    </section>
  );
}
