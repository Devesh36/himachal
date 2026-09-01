import Image from "next/image";
import { hotels } from "@/data/itinerary";

export function Hotels() {
  return (
    <section className="bg-white px-4 py-12 sm:px-8 sm:py-20">
      <div className="mx-auto w-full max-w-[720px]">
        <header className="mb-6 sm:mb-10">
          <h2 className="text-[clamp(1.75rem,8vw,3.25rem)] font-black tracking-tight text-[#f07a6a]">
            Hotel Envisaged
          </h2>
          <p className="mt-2 max-w-md text-[13px] leading-relaxed text-[#b0b0b0] sm:mt-3 sm:text-[16px]">
            The hotels mentioned below or of similar class will booked based on
            availability
          </p>
        </header>

        <div className="overflow-hidden rounded-sm">
          {hotels.map((hotel) => (
            <article
              key={hotel.name}
              className="relative h-[130px] w-full overflow-hidden sm:h-[200px]"
            >
              <Image
                src={hotel.image}
                alt={hotel.name}
                fill
                quality={90}
                className="object-cover object-center"
                sizes="(max-width: 720px) 100vw, 720px"
              />

              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(90deg, ${hotel.accent} 0%, ${hotel.accent} 48%, ${hotel.accent}00 86%)`,
                }}
              />

              <div className="relative z-10 flex h-full flex-col justify-center px-4 pr-16 sm:px-10 sm:pr-24">
                <h3 className="text-[18px] font-semibold tracking-tight text-white sm:text-[28px]">
                  {hotel.name}
                </h3>
                <p className="mt-0.5 text-[12px] font-medium text-white/75 sm:mt-1 sm:text-[16px]">
                  {hotel.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
