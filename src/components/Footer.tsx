import Image from "next/image";

export function Footer() {
  return (
    <footer>
      <div className="bg-[#ffda15] px-4 py-8 pb-[max(2rem,env(safe-area-inset-bottom))] text-white sm:px-8 sm:py-12">
        <div className="mx-auto flex w-full max-w-[900px] flex-col items-center gap-8 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-6">
          {/* Logos stacked */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/images/logo-wanderworld-white.png"
              alt="Wanderworld Holidays"
              width={291}
              height={110}
              className="h-auto w-[140px] object-contain sm:w-[180px]"
            />
            <span className="my-1.5 text-base font-light text-white/90 sm:my-2 sm:text-[18px]">
              ×
            </span>
            <Image
              src="/images/logo-together-trails.png"
              alt="Together Trails"
              width={219}
              height={105}
              className="h-auto w-[130px] object-contain brightness-0 invert sm:w-[170px]"
            />
          </div>

          {/* WhatsApp CTA */}
          <div className="flex w-full justify-center md:w-auto">
            <a
              href="https://www.sinkto.link/KPVHFE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full max-w-[320px] items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-5 py-3.5 text-[14px] font-bold text-white shadow-[0_10px_24px_rgba(0,0,0,0.18)] transition hover:bg-[#1ebe57] active:scale-[0.98] md:w-auto md:px-7 md:text-[16px]"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden
                className="size-5 shrink-0 fill-current sm:size-6"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Join WhatsApp Group
            </a>
          </div>

          {/* Contact */}
          <div className="w-full text-center md:text-left">
            <p className="text-[22px] font-black leading-[1.1] sm:text-[32px]">
              For Bookings
              <br />
              Contact
            </p>
            <p className="mt-2 text-[14px] font-bold sm:mt-3 sm:text-[17px]">
              Sujal Sutari:{" "}
              <a href="tel:+919028348987" className="hover:underline">
                90283 48987
              </a>
            </p>
            <a
              href="https://www.instagram.com/together__trails/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-[14px] font-bold hover:underline sm:mt-5 sm:text-[15px]"
            >
              <span className="inline-flex size-7 items-center justify-center rounded-full border-2 border-white text-[11px]">
                IG
              </span>
              @together__trails
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
