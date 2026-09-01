import Image from "next/image";
import { days } from "@/data/itinerary";
import { TrainTicket } from "./TrainTicket";

export function Itinerary() {
  return (
    <section className="relative bg-black text-white">
      <div className="mx-auto max-w-[1080px] px-4 py-10 sm:px-8 sm:py-20">
        <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#ff8a8a] sm:text-xs">
          Your journey
        </p>
        <h2 className="mt-2 text-[clamp(2.25rem,10vw,4.5rem)] font-black leading-none tracking-tight sm:mt-3">
          Itinerary
        </h2>
        <p className="mt-3 max-w-xl text-sm text-white/70 sm:mt-4 sm:text-xl">
          A complete guide to your journey to the mountains
        </p>
      </div>

      <div className="relative mx-auto max-w-[1080px]">
        <div className="pointer-events-none absolute bottom-0 left-[48px] top-0 z-20 w-[2px] bg-[#ff5a5f] sm:left-[108px]" />

        {days.map((day) =>
          day.stops.map((stop, stopIndex) => {
            const showDay = stopIndex === 0;
            const showHighlight =
              Boolean(stop.highlight) &&
              (!stop.description ||
                !stop.description
                  .toLowerCase()
                  .includes(stop.highlight!.slice(0, 32).toLowerCase()));

            return (
              <article
                key={`${day.day}-${stop.title}`}
                className="relative min-h-[85svh] overflow-hidden sm:min-h-[100svh]"
              >
                <Image
                  src={stop.image}
                  alt={stop.title}
                  fill
                  quality={90}
                  className="object-cover"
                  sizes="100vw"
                  priority={day.day === "01"}
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/75 sm:bg-gradient-to-r sm:from-black/80 sm:via-black/50 sm:to-black/20" />
                <div className="absolute inset-0 hidden bg-gradient-to-b from-black/40 via-transparent to-black/55 sm:block" />

                <div className="relative z-10 flex min-h-[85svh] flex-col justify-end px-3 py-10 sm:min-h-[100svh] sm:justify-center sm:px-6 sm:py-24">
                  <div className="grid grid-cols-[48px_1fr] items-start gap-1 sm:grid-cols-[108px_1fr] sm:gap-0">
                    <div className="relative z-30 flex flex-col items-center pt-1 text-center">
                      {showDay ? (
                        <>
                          <p className="text-[28px] font-extralight leading-none tracking-tight text-white sm:text-[64px]">
                            {day.day}
                          </p>
                          <p className="mt-0.5 text-[9px] font-semibold tracking-[0.35em] text-white/85 sm:mt-1 sm:text-sm sm:tracking-[0.45em]">
                            DAY
                          </p>
                        </>
                      ) : (
                        <div className="h-8 sm:h-[76px]" />
                      )}
                    </div>

                    <div className="relative max-w-[560px] pl-3 sm:pl-8">
                      <span className="absolute left-[-7px] top-[0.55rem] z-30 size-3 -translate-x-1/2 rounded-full bg-white shadow-[0_0_0_3px_rgba(255,90,95,0.35)] sm:left-[-13px] sm:top-[1.05rem] sm:size-4 sm:shadow-[0_0_0_4px_rgba(255,90,95,0.35)]" />

                      <h3 className="pr-2 text-[22px] font-bold tracking-tight break-words text-[#ff6b6b] sm:text-[36px]">
                        {stop.title}
                      </h3>

                      {stop.description ? (
                        <p className="mt-2 text-[13px] leading-relaxed text-white/90 sm:mt-4 sm:text-[16px] sm:leading-7">
                          {stop.description}
                        </p>
                      ) : null}

                      {stop.meals ? (
                        <p className="mt-3 text-[13px] font-semibold text-white sm:mt-4 sm:text-[15px]">
                          Meals: {stop.meals}
                        </p>
                      ) : null}

                      {stop.ticket ? <TrainTicket /> : null}

                      {showHighlight ? (
                        <div className="mt-4 max-w-[480px] rounded-xl bg-[#ffda15] px-4 py-3 text-[#121212] shadow-[0_12px_40px_rgba(0,0,0,0.25)] sm:mt-6 sm:rounded-2xl sm:px-5 sm:py-4">
                          <p className="text-[13px] font-bold leading-snug sm:text-[15px]">
                            {stop.highlight}
                          </p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </article>
            );
          }),
        )}
      </div>
    </section>
  );
}
