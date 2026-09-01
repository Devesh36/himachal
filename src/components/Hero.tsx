import Image from "next/image";

export function Hero() {
  return (
    <section className="relative bg-black">
      <div className="relative mx-auto min-h-[100svh] w-full max-w-[1080px] overflow-hidden sm:min-h-0 sm:aspect-[680/1008]">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          quality={95}
          className="object-cover object-[center_35%] sm:object-center"
          sizes="100vw"
        />

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,transparent_30%,transparent_50%,rgba(0,0,0,0.55)_100%)]" />

        <div className="relative z-10 flex min-h-[100svh] flex-col px-3 pb-5 pt-4 sm:min-h-0 sm:h-full sm:px-8 sm:pb-10 sm:pt-8">
          {/* Brand pill */}
          <div className="mx-auto w-full max-w-[520px]">
            <div className="flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.2)] backdrop-blur-md sm:gap-5 sm:px-7 sm:py-4">
              <Image
                src="/images/logo-wanderworld-white.png"
                alt="Wanderworld Holidays"
                width={230}
                height={88}
                className="h-6 w-auto max-w-[42%] object-contain sm:h-11 sm:max-w-none"
                priority
              />
              <span className="h-6 w-px shrink-0 bg-white/70 sm:h-12" />
              <Image
                src="/images/logo-together-trails.png"
                alt="Together Trails"
                width={219}
                height={105}
                className="h-7 w-auto max-w-[38%] object-contain brightness-0 invert sm:h-12 sm:max-w-[140px]"
                priority
              />
            </div>
          </div>

          {/* Himachal title */}
          <div className="mt-6 px-1 text-center sm:mt-[8%]">
            <h1 className="mx-auto max-w-full font-[family-name:var(--font-script)] text-[42px] leading-none text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)] sm:text-[96px] md:text-[120px] lg:text-[128px]">
              Himachal
            </h1>
            <div className="mx-auto mt-[-4px] h-[3px] w-[50%] max-w-[180px] rounded-full bg-gradient-to-r from-transparent via-[#ffb457] to-transparent sm:mt-[-10px] sm:h-[4px] sm:max-w-[360px]" />
          </div>

          <div className="flex-1" />

          {/* Trip meta */}
          <div className="mx-auto w-full max-w-[820px] space-y-2.5 sm:space-y-4">
            <div className="rounded-2xl border border-white/20 bg-black/30 px-3 py-4 shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-md sm:rounded-[24px] sm:px-8 sm:py-7">
              <p className="max-w-full text-center text-[8px] font-extrabold uppercase leading-[1.45] tracking-[0.02em] text-white break-words sm:text-[13px] sm:tracking-[0.1em] md:text-[15px] md:tracking-[0.12em]">
                Mumbai-Delhi-Kullu-Manali - Kasol -
                <br className="sm:hidden" />
                Dharamshala - Amritsar-Delhi-Mumbai
              </p>

              <div className="mx-auto mt-2.5 h-px w-[85%] max-w-[560px] bg-white/55 sm:mt-4" />

              <div className="mt-2.5 flex items-center justify-center gap-4 sm:mt-4 sm:gap-12">
                <DateBlock day="15" />
                <span className="text-[22px] font-light text-white sm:text-[40px]">
                  →
                </span>
                <DateBlock day="25" />
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 sm:gap-5">
              <span className="h-px w-10 bg-white/70 sm:w-28" />
              <p className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-white sm:text-[20px] sm:tracking-[0.16em]">
                10 Nights <span className="font-normal">11 Days</span>
              </p>
              <span className="h-px w-10 bg-white/70 sm:w-28" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DateBlock({ day }: { day: string }) {
  return (
    <div className="min-w-[56px] text-center text-white sm:min-w-[100px]">
      <p className="text-[36px] font-extralight leading-none tracking-tight sm:text-[72px] md:text-[84px]">
        {day}
      </p>
      <p className="mt-0.5 text-[10px] font-black tracking-[0.45em] sm:text-[16px] sm:tracking-[0.65em]">
        DEC
      </p>
      <p className="text-[10px] font-black tracking-[0.25em] text-white/55 sm:text-[15px] sm:tracking-[0.4em]">
        2026
      </p>
    </div>
  );
}
