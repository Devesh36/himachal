import { inclusions } from "@/data/itinerary";

export function Inclusions() {
  return (
    <section className="bg-[#ffda15] px-4 pb-5 pt-8 sm:px-8 sm:pb-8 sm:pt-14">
      <div className="mx-auto w-full max-w-[720px] overflow-hidden rounded-[22px] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.12)] sm:rounded-[28px]">
        <div className="rounded-t-[22px] bg-[#ffda15] px-5 py-8 sm:rounded-t-[28px] sm:px-10 sm:py-12">
          <h2 className="text-[28px] font-bold uppercase tracking-wide text-white sm:text-[48px]">
            INCLUSIONS
          </h2>
        </div>

        <div className="bg-[#f3f3f3] px-5 py-6 sm:px-10 sm:py-10">
          <p className="text-[14px] font-bold text-[#8a8a8a] sm:text-[18px]">
            The above Price includes:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-4 text-[13px] font-semibold leading-snug text-[#8a8a8a] sm:mt-4 sm:space-y-2.5 sm:pl-6 sm:text-[17px]">
            {inclusions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
