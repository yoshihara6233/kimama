import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";
import { RESTAURANT } from "@/lib/constants";

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function XIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-[var(--secondary)] text-[var(--secondary-foreground)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* 店舗情報 */}
          <div>
            <p className="font-serif text-2xl font-bold tracking-widest text-white mb-1">
              {RESTAURANT.name}
            </p>
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--accent)] mb-4">
              {RESTAURANT.nameEn}
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              {RESTAURANT.catchcopy}
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href={RESTAURANT.sns.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[var(--accent)] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href={RESTAURANT.sns.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[var(--accent)] transition-colors"
                aria-label="Twitter"
              >
                <XIcon size={20} />
              </a>
            </div>
          </div>

          {/* 営業時間 */}
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase text-[var(--accent)] mb-4">
              Hours
            </h3>
            <div className="flex items-start gap-2 mb-3">
              <Clock size={14} className="mt-0.5 text-white/50 shrink-0" />
              <div className="text-sm text-white/80 space-y-1">
                {RESTAURANT.hours.map((h) => (
                  <div key={h.day}>
                    <span className="text-white/50 text-xs mr-2">{h.day}</span>
                    {h.lunch && (
                      <span className="mr-2">昼 {h.lunch}</span>
                    )}
                    {h.dinner && <span>夜 {h.dinner}</span>}
                  </div>
                ))}
                <div className="text-white/50 text-xs mt-1">
                  定休日：{RESTAURANT.closed}
                </div>
              </div>
            </div>
          </div>

          {/* アクセス */}
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase text-[var(--accent)] mb-4">
              Access
            </h3>
            <div className="flex items-start gap-2 mb-3">
              <MapPin size={14} className="mt-0.5 text-white/50 shrink-0" />
              <address className="not-italic text-sm text-white/80 leading-relaxed">
                {RESTAURANT.address.postal}<br />
                {RESTAURANT.addressFull}
              </address>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-white/50 shrink-0" />
              <a
                href={`tel:${RESTAURANT.phone}`}
                className="text-sm text-white/80 hover:text-[var(--accent)] transition-colors"
              >
                {RESTAURANT.phone}
              </a>
            </div>
          </div>
        </div>

        {/* ナビ */}
        <nav className="mt-10 pt-6 border-t border-white/10 flex flex-wrap gap-x-6 gap-y-2 justify-center">
          {[
            { href: "/menu", label: "メニュー" },
            { href: "/gallery", label: "ギャラリー" },
            { href: "/access", label: "アクセス" },
            { href: "/news", label: "お知らせ" },
            { href: "/reservation", label: "ご予約" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs text-white/50 hover:text-white transition-colors tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="text-center text-xs text-white/30 mt-6">
          &copy; {new Date().getFullYear()} {RESTAURANT.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
