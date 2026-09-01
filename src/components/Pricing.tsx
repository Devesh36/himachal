import Image from "next/image";
import { installments } from "@/data/itinerary";

export function Pricing() {
  return (
    <section className="section-pad bg-[#f4f1ea]">
      <div className="page-shell">
        <header className="max-w-2xl">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#8a7a3a] sm:text-xs">
            Pricing
          </p>
          <h2 className="mt-2 text-[clamp(1.75rem,8vw,3.5rem)] font-black leading-[1.05] tracking-tight text-[#121212] sm:mt-3">
            Simple, transparent pricing
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#5c5c5c] sm:mt-4 sm:text-lg">
            Offer price @ ₹17,499/-. This offer can be paid in 3 installments;
            rates may vary after that depending on travel costs.
          </p>
        </header>

        <p className="mt-8 text-[clamp(1.75rem,8vw,3.5rem)] font-bold uppercase tracking-[0.06em] text-[#121212] sm:mt-10 sm:tracking-[0.08em]">
          Package Cost
        </p>

        <div className="mx-auto mt-6 w-full max-w-[420px] overflow-hidden rounded-[24px] bg-gradient-to-br from-[#1547a8] via-[#2f6ed8] to-[#5990f1] px-5 py-8 text-center text-white shadow-[0_24px_60px_rgba(21,71,168,0.35)] sm:mt-8 sm:rounded-[28px] sm:px-8 sm:py-12">
          <Image
            src="/images/train-icon.png"
            alt="AC Train"
            width={285}
            height={262}
            className="mx-auto h-auto w-[120px] object-contain drop-shadow-lg sm:w-[190px]"
          />

          <p className="mt-4 text-[36px] font-bold leading-none tracking-tight sm:mt-5 sm:text-[56px]">
            ₹17,499/-
          </p>

          <div className="mx-auto mt-4 inline-flex rounded-full bg-black/30 px-4 py-1.5 backdrop-blur-sm sm:mt-5 sm:px-5 sm:py-2">
            <span className="text-xs font-bold tracking-[0.16em] sm:text-base">
              AC TRAIN
            </span>
          </div>

          <div className="mt-6 flex items-center gap-3 sm:mt-8">
            <div className="h-px flex-1 bg-white/50" />
            <span className="text-sm font-bold tracking-wide sm:text-base">
              Installments
            </span>
            <div className="h-px flex-1 bg-white/50" />
          </div>

          <ul className="mt-4 space-y-1.5 sm:mt-5 sm:space-y-2">
            {installments.map((amount, index) => (
              <li
                key={`${amount}-${index}`}
                className="text-[24px] font-bold tracking-tight sm:text-[34px]"
              >
                {amount.replace("₹. ", "₹")}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
