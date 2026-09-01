import { terms } from "@/data/itinerary";

export function Terms() {
  return (
    <section className="bg-[#ffda15] px-4 pb-6 pt-2 sm:px-8 sm:pb-10">
      <div className="mx-auto w-full max-w-[720px] overflow-hidden rounded-[22px] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.12)] sm:rounded-[28px]">
        <div className="rounded-t-[22px] bg-[#ffda15] px-5 py-8 sm:rounded-t-[28px] sm:px-10 sm:py-12">
          <h2 className="text-[26px] font-medium leading-tight text-white sm:text-[44px]">
            Terms & Conditions
          </h2>
        </div>

        <div className="bg-[#f3f3f3] px-5 py-6 sm:px-10 sm:py-10">
          <ul className="list-disc space-y-2.5 pl-4 text-[12px] font-semibold leading-relaxed text-[#8a8a8a] sm:space-y-3.5 sm:pl-6 sm:text-[15px]">
            {terms.map((item) => (
              <li key={item.slice(0, 48)}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
