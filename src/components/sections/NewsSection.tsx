"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { newsItems, type NewsTag } from "@/data/news";

const latest = newsItems.slice(0, 3);

const tagColors: Record<NewsTag, string> = {
  お知らせ: "bg-[var(--primary)]/10 text-[var(--primary)]",
  イベント: "bg-[var(--accent)]/15 text-[var(--accent)]",
  メニュー: "bg-emerald-50 text-emerald-700",
  休業: "bg-slate-100 text-slate-600",
};

export function NewsSection() {
  return (
    <section className="py-24 md:py-32 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="section-title-en mb-3">News</p>
            <h2 className="section-title text-3xl font-bold text-[var(--foreground)]">
              お知らせ
            </h2>
          </div>
          <Link
            href="/news"
            className="hidden sm:flex items-center gap-1.5 text-sm text-[var(--primary)] hover:text-[var(--accent)] transition-colors"
          >
            すべて見る
            <ArrowRight size={14} />
          </Link>
        </motion.div>

        {/* ニュースリスト */}
        <div className="divide-y divide-[var(--border)]">
          {latest.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="py-6 group"
            >
              <Link href={`/news#${item.id}`} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                <div className="flex items-center gap-3 shrink-0">
                  <time
                    dateTime={item.date}
                    className="text-xs text-[var(--muted-foreground)] tracking-wide w-24"
                  >
                    {item.date.replace(/-/g, ".")}
                  </time>
                  <span
                    className={`text-[10px] px-2.5 py-1 rounded-full font-medium tracking-wide whitespace-nowrap ${tagColors[item.tag]}`}
                  >
                    {item.tag}
                  </span>
                </div>
                <p className="text-sm text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors leading-relaxed">
                  {item.title}
                </p>
                <ArrowRight
                  size={14}
                  className="shrink-0 text-[var(--muted-foreground)] group-hover:text-[var(--primary)] group-hover:translate-x-1 transition-all ml-auto hidden sm:block"
                />
              </Link>
            </motion.article>
          ))}
        </div>

        {/* モバイル：すべて見るリンク */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/news"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--primary)] hover:text-[var(--accent)] transition-colors"
          >
            すべて見る
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
