import { Metadata } from "next";
import { motion } from "framer-motion";
import { MapPin, Train, Car, Clock, Phone } from "lucide-react";
import { RESTAURANT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "アクセス",
  description: `${RESTAURANT.name}へのアクセス情報。${RESTAURANT.access.train}`,
};

export default function AccessPage() {
  return (
    <>
      {/* ページヘッダー */}
      <div className="pt-20 bg-[var(--secondary)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <p className="text-[var(--accent)] text-xs tracking-[0.4em] uppercase mb-3">Access</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white tracking-wide">
            アクセス
          </h1>
          <div className="w-10 h-0.5 bg-[var(--accent)] mt-6" />
        </div>
      </div>

      <div className="bg-[var(--background)] min-h-screen">
        {/* フルワイドマップ */}
        <div className="w-full h-72 md:h-96">
          <iframe
            src={RESTAURANT.googleMapsUrl}
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="きまま アクセスマップ"
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* 左：店舗情報 */}
            <div className="space-y-8">
              {/* 住所 */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={16} className="text-[var(--accent)]" />
                  <h2 className="font-serif text-lg font-bold text-[var(--foreground)] tracking-wide">
                    住所
                  </h2>
                </div>
                <address className="not-italic text-[var(--muted-foreground)] leading-relaxed pl-6">
                  {RESTAURANT.address.postal}<br />
                  {RESTAURANT.addressFull}
                </address>
              </div>

              {/* 電車 */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Train size={16} className="text-[var(--accent)]" />
                  <h2 className="font-serif text-lg font-bold text-[var(--foreground)] tracking-wide">
                    電車でお越しの方
                  </h2>
                </div>
                <p className="text-[var(--muted-foreground)] pl-6">{RESTAURANT.access.train}</p>
                <p className="text-[var(--muted-foreground)] pl-6 mt-1 text-sm">{RESTAURANT.access.bus}</p>
              </div>

              {/* 駐車場 */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Car size={16} className="text-[var(--accent)]" />
                  <h2 className="font-serif text-lg font-bold text-[var(--foreground)] tracking-wide">
                    お車でお越しの方
                  </h2>
                </div>
                <p className="text-[var(--muted-foreground)] pl-6">{RESTAURANT.access.parking}</p>
              </div>

              {/* 電話 */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Phone size={16} className="text-[var(--accent)]" />
                  <h2 className="font-serif text-lg font-bold text-[var(--foreground)] tracking-wide">
                    お電話
                  </h2>
                </div>
                <a
                  href={`tel:${RESTAURANT.phone}`}
                  className="text-[var(--primary)] hover:text-[var(--accent)] transition-colors pl-6 text-lg font-medium"
                >
                  {RESTAURANT.phone}
                </a>
              </div>
            </div>

            {/* 右：営業時間 */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Clock size={16} className="text-[var(--accent)]" />
                <h2 className="font-serif text-lg font-bold text-[var(--foreground)] tracking-wide">
                  営業時間
                </h2>
              </div>

              <div className="bg-[var(--card)] rounded-sm overflow-hidden border border-[var(--border)]">
                {RESTAURANT.hours.map((h, i) => (
                  <div
                    key={h.day}
                    className={`grid grid-cols-3 gap-4 px-5 py-4 text-sm ${
                      i > 0 ? "border-t border-[var(--border)]" : ""
                    }`}
                  >
                    <span className="text-[var(--muted-foreground)] font-medium">{h.day}</span>
                    <span className="text-[var(--foreground)] col-span-2">
                      {h.lunch && (
                        <span className="block">
                          <span className="text-xs text-[var(--muted-foreground)] mr-2">ランチ</span>
                          {h.lunch}
                        </span>
                      )}
                      <span className="block mt-0.5">
                        <span className="text-xs text-[var(--muted-foreground)] mr-2">ディナー</span>
                        {h.dinner}
                      </span>
                    </span>
                  </div>
                ))}
                <div className="px-5 py-3 bg-[var(--muted)] text-xs text-[var(--muted-foreground)]">
                  定休日：{RESTAURANT.closed}
                </div>
              </div>

              {/* 座席数 */}
              <div className="mt-6 px-5 py-4 bg-[var(--muted)] rounded-sm">
                <dl className="grid grid-cols-2 gap-3 text-sm">
                  <dt className="text-[var(--muted-foreground)]">座席数</dt>
                  <dd className="text-[var(--foreground)] font-medium">{RESTAURANT.seats}席</dd>
                  <dt className="text-[var(--muted-foreground)]">メールアドレス</dt>
                  <dd>
                    <a
                      href={`mailto:${RESTAURANT.email}`}
                      className="text-[var(--primary)] hover:text-[var(--accent)] transition-colors break-all"
                    >
                      {RESTAURANT.email}
                    </a>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
