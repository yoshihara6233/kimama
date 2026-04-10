import { Metadata } from "next";
import { Phone } from "lucide-react";
import { ReservationForm } from "@/components/forms/ReservationForm";
import { RESTAURANT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "ご予約",
  description: `${RESTAURANT.name}のご予約はこちら。オンラインまたはお電話にてご予約いただけます。`,
};

export default function ReservationPage() {
  return (
    <>
      {/* ページヘッダー */}
      <div className="pt-20 bg-[var(--secondary)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <p className="text-[var(--accent)] text-xs tracking-[0.4em] uppercase mb-3">Reservation</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white tracking-wide">
            ご予約
          </h1>
          <div className="w-10 h-0.5 bg-[var(--accent)] mt-6" />
        </div>
      </div>

      <div className="bg-[var(--background)] min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* フォーム */}
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl font-bold text-[var(--foreground)] mb-2">
                オンライン予約フォーム
              </h2>
              <p className="text-sm text-[var(--muted-foreground)] mb-8 leading-relaxed">
                ご予約内容を入力してください。確認メールをお送りします。<br />
                当日のご予約はお電話にてお願いいたします。
              </p>
              <ReservationForm />
            </div>

            {/* サイドバー */}
            <div className="space-y-6">
              {/* 電話予約 */}
              <div className="bg-[var(--card)] border border-[var(--border)] rounded-sm p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Phone size={15} className="text-[var(--accent)]" />
                  <h3 className="font-serif font-bold text-[var(--foreground)] tracking-wide">
                    お電話でのご予約
                  </h3>
                </div>
                <a
                  href={`tel:${RESTAURANT.phone}`}
                  className="block text-xl font-medium text-[var(--primary)] hover:text-[var(--accent)] transition-colors mb-3"
                >
                  {RESTAURANT.phone}
                </a>
                <div className="text-xs text-[var(--muted-foreground)] space-y-1">
                  {RESTAURANT.hours.map((h) => (
                    <p key={h.day}>
                      <span className="mr-2">{h.day}</span>
                      {h.lunch && `${h.lunch} /`} {h.dinner}
                    </p>
                  ))}
                </div>
              </div>

              {/* 注意事項 */}
              <div className="bg-[var(--muted)] rounded-sm p-5 text-xs text-[var(--muted-foreground)] leading-relaxed space-y-2">
                <p className="font-medium text-[var(--foreground)] text-sm mb-3">ご予約の注意事項</p>
                <p>・ご予約は2日前までにお願いいたします。</p>
                <p>・キャンセルは前日17時までにご連絡ください。</p>
                <p>・10名以上のご予約はお電話にてご相談ください。</p>
                <p>・コース料理はご予約時にお申し付けください。</p>
                <p>・お子様連れの方はご予約時にお知らせください。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
