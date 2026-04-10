"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Train } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESTAURANT } from "@/lib/constants";

export function AccessSection() {
  return (
    <section className="py-24 md:py-32 bg-[var(--secondary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[var(--accent)] text-xs tracking-[0.4em] uppercase mb-3">
            Access
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
            アクセス
          </h2>
          <div className="w-10 h-0.5 bg-[var(--accent)] mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* 地図（埋め込みプレースホルダー） */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-video lg:aspect-[4/3] rounded-sm overflow-hidden bg-[var(--foreground)]/10"
          >
            <iframe
              src={RESTAURANT.googleMapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(20%) contrast(1.05)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="きまま 地図"
            />
          </motion.div>

          {/* 情報 */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6"
          >
            {/* 住所 */}
            <div className="flex items-start gap-4">
              <div className="mt-0.5 w-8 h-8 rounded-full bg-[var(--accent)]/20 flex items-center justify-center shrink-0">
                <MapPin size={15} className="text-[var(--accent)]" />
              </div>
              <div>
                <p className="text-[10px] tracking-widest text-white/50 uppercase mb-1">Address</p>
                <address className="not-italic text-white/90 leading-relaxed text-sm">
                  {RESTAURANT.address.postal}<br />
                  {RESTAURANT.addressFull}
                </address>
              </div>
            </div>

            {/* アクセス */}
            <div className="flex items-start gap-4">
              <div className="mt-0.5 w-8 h-8 rounded-full bg-[var(--accent)]/20 flex items-center justify-center shrink-0">
                <Train size={15} className="text-[var(--accent)]" />
              </div>
              <div>
                <p className="text-[10px] tracking-widest text-white/50 uppercase mb-1">Transport</p>
                <p className="text-white/90 text-sm">{RESTAURANT.access.train}</p>
                <p className="text-white/60 text-xs mt-1">{RESTAURANT.access.parking}</p>
              </div>
            </div>

            {/* 営業時間 */}
            <div className="flex items-start gap-4">
              <div className="mt-0.5 w-8 h-8 rounded-full bg-[var(--accent)]/20 flex items-center justify-center shrink-0">
                <Clock size={15} className="text-[var(--accent)]" />
              </div>
              <div>
                <p className="text-[10px] tracking-widest text-white/50 uppercase mb-1">Hours</p>
                {RESTAURANT.hours.map((h) => (
                  <div key={h.day} className="text-sm mb-1">
                    <span className="text-white/50 text-xs mr-3">{h.day}</span>
                    <span className="text-white/90">
                      {h.lunch && `昼 ${h.lunch}`}{h.lunch && h.dinner && "　"}{h.dinner && `夜 ${h.dinner}`}
                    </span>
                  </div>
                ))}
                <p className="text-white/40 text-xs mt-1">定休日：{RESTAURANT.closed}</p>
              </div>
            </div>

            {/* 電話 */}
            <div className="flex items-start gap-4">
              <div className="mt-0.5 w-8 h-8 rounded-full bg-[var(--accent)]/20 flex items-center justify-center shrink-0">
                <Phone size={15} className="text-[var(--accent)]" />
              </div>
              <div>
                <p className="text-[10px] tracking-widest text-white/50 uppercase mb-1">Phone</p>
                <a
                  href={`tel:${RESTAURANT.phone}`}
                  className="text-white/90 text-sm hover:text-[var(--accent)] transition-colors"
                >
                  {RESTAURANT.phone}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Button asChild variant="accent" size="lg">
                <Link href="/access">詳しいアクセスはこちら</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
