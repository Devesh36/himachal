export function TrainTicket() {
  return (
    <div className="relative mt-4 w-full max-w-[420px] sm:mt-6">
      <div className="relative overflow-hidden rounded-2xl bg-white px-3.5 py-4 text-[#121212] shadow-[0_18px_50px_rgba(0,0,0,0.35)] sm:rounded-[18px] sm:px-7 sm:py-6">
        <div className="pointer-events-none absolute left-0 top-[58%] size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/80 sm:size-5" />
        <div className="pointer-events-none absolute right-0 top-[58%] size-4 translate-x-1/2 -translate-y-1/2 rounded-full bg-black/80 sm:size-5" />

        <div className="flex items-start justify-between gap-2 sm:gap-3">
          <div className="min-w-0">
            <p className="text-[28px] font-light leading-none tracking-wide sm:text-[48px]">
              BDTS
            </p>
            <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.12em] text-[#8a8a8a] sm:text-[9px] sm:tracking-[0.16em]">
              Bandra Terminus
            </p>
          </div>

          <div className="flex shrink-0 flex-col items-center pt-1 sm:pt-2">
            <span className="rounded-full bg-[#1a1a1a] px-2 py-0.5 text-[8px] font-semibold text-white sm:px-2.5 sm:py-1 sm:text-[9px]">
              23h:00m
            </span>
          </div>

          <div className="min-w-0 text-right">
            <p className="text-[28px] font-light leading-none tracking-wide sm:text-[48px]">
              DEE
            </p>
            <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.12em] text-[#8a8a8a] sm:text-[9px] sm:tracking-[0.16em]">
              Delhi S Rohilla
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-[#ececec] pt-3 sm:mt-5 sm:gap-3 sm:pt-4">
          <p className="text-[9px] font-semibold uppercase tracking-[0.1em] text-[#666] sm:text-[10px]">
            DEE Garibrath (12216)
          </p>
          <div className="hidden h-px flex-1 bg-[#e5e5e5] sm:block" />
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-2 sm:mt-3">
          <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#666] sm:text-[10px]">
            Boarding Time:
          </span>
          <span className="text-[11px] font-bold text-[#121212] sm:text-[12px]">
            12:00
          </span>
        </div>
      </div>
    </div>
  );
}
