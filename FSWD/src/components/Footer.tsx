import { WEBINAR_CONFIG } from "@/config/webinar";

export default function Footer() {
  return (
    <footer className="bg-surface px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
        <div className="flex items-center justify-center gap-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={WEBINAR_CONFIG.brand.logo}
            alt={WEBINAR_CONFIG.brand.org}
            className="h-16 sm:h-18 w-auto"
          />
          <span className="text-muted/40 text-xl font-bold" aria-hidden>&middot;</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/code.in-logo-trimmed.svg"
            alt="code.in Logo"
            className="h-10 sm:h-12 w-auto"
          />
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-muted">
            &copy; 2026 Code For India Foundation <span className="mx-1 text-muted/40 font-bold">&middot;</span> Govt. of Telangana Accredited
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm font-semibold text-primary">
            <a href="tel:+919030391959" className="hover:underline">
              +91 9030 391 959
            </a>
            <span className="text-muted/40 font-bold">&middot;</span>
            <a href="mailto:team@codeforindia.com" className="hover:underline">
              team@codeforindia.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
