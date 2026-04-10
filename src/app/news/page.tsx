import { Metadata } from "next";
import { newsItems, type NewsTag } from "@/data/news";

export const metadata: Metadata = {
  title: "お知らせ",
  description: "きままからのお知らせ・イベント・メニュー情報をお届けします。",
};

const tagColors: Record<NewsTag, string> = {
  お知らせ: "bg-[var(--primary)]/10 text-[var(--primary)]",
  イベント: "bg-[var(--accent)]/15 text-[var(--accent)]",
  メニュー: "bg-emerald-50 text-emerald-700",
  休業:     "bg-slate-100 text-slate-600",
};

export default function NewsPage() {
  return (
    <>
      {/* ページヘッダー */}
      <div className="pt-20 bg-[var(--secondary)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <p className="text-[var(--accent)] text-xs tracking-[0.4em] uppercase mb-3">News</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white tracking-wide">
            お知らせ
          </h1>
          <div className="w-10 h-0.5 bg-[var(--accent)] mt-6" />
        </div>
      </div>

      <div className="bg-[var(--background)] min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-10">
            {newsItems.map((item) => (
              <article
                key={item.id}
                id={item.id}
                className="pb-10 border-b border-[var(--border)] last:border-0 last:pb-0 scroll-mt-28"
              >
                {/* メタ情報 */}
                <div className="flex items-center gap-3 mb-3">
                  <time
                    dateTime={item.date}
                    className="text-xs text-[var(--muted-foreground)] tracking-wide"
                  >
                    {item.date.replace(/-/g, ".")}
                  </time>
                  <span
                    className={`text-[10px] px-2.5 py-1 rounded-full font-medium tracking-wide ${tagColors[item.tag]}`}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* タイトル */}
                <h2 className="font-serif text-xl font-bold text-[var(--foreground)] leading-snug mb-3 tracking-wide">
                  {item.title}
                </h2>

                {/* 本文 */}
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
