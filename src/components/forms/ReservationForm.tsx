"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// react-hook-form はすべてのフィールドを string として扱うため
// guests は string で受け取り、API 送信時に変換する
const schema = z.object({
  date:   z.string().min(1, "日付を選択してください"),
  time:   z.string().min(1, "時間帯を選択してください"),
  guests: z.string().min(1, "人数を選択してください"),
  name:   z.string().min(1, "お名前を入力してください"),
  phone:  z.string().regex(/^[\d\-+() ]+$/, "正しい電話番号を入力してください"),
  email:  z.string().min(1, "メールアドレスを入力してください").includes("@", { error: "正しいメールアドレスを入力してください" }),
  notes:  z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

type Status = "idle" | "loading" | "success" | "error";

// 今日以降の日付を ISO 文字列で返す
function today() {
  return new Date().toISOString().split("T")[0];
}

// ランチ / ディナー時間帯
const TIME_OPTIONS = [
  { value: "lunch-1130", label: "ランチ 11:30" },
  { value: "lunch-1200", label: "ランチ 12:00" },
  { value: "lunch-1300", label: "ランチ 13:00" },
  { value: "dinner-1700", label: "ディナー 17:00" },
  { value: "dinner-1800", label: "ディナー 18:00" },
  { value: "dinner-1900", label: "ディナー 19:00" },
  { value: "dinner-2000", label: "ディナー 20:00" },
  { value: "dinner-2100", label: "ディナー 21:00" },
];

export function ReservationForm() {
  const [status, setStatus] = useState<Status>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("server error");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-4 py-16 text-center"
      >
        <CheckCircle size={48} className="text-emerald-500" />
        <h2 className="font-serif text-2xl font-bold text-[var(--foreground)]">
          ご予約を受け付けました
        </h2>
        <p className="text-[var(--muted-foreground)] text-sm leading-relaxed max-w-sm">
          ご入力いただいたメールアドレスに確認メールをお送りしました。
          内容をご確認のうえ、当日お越しください。
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-[var(--primary)] underline underline-offset-2"
        >
          別の日程で予約する
        </button>
      </motion.div>
    );
  }

  const fieldClass =
    "w-full px-4 py-2.5 text-sm bg-[var(--input)] border border-[var(--border)] rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--ring)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]";
  const errorClass = "mt-1 text-xs text-red-600";
  const labelClass = "block text-xs font-medium text-[var(--foreground)] mb-1.5 tracking-wide";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      {/* 1行目：日付 × 時間帯 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="date" className={labelClass}>
            希望日 <span className="text-red-500">*</span>
          </label>
          <input
            id="date"
            type="date"
            min={today()}
            {...register("date")}
            className={fieldClass}
          />
          {errors.date && <p className={errorClass}>{errors.date.message}</p>}
        </div>

        <div>
          <label htmlFor="time" className={labelClass}>
            希望時間帯 <span className="text-red-500">*</span>
          </label>
          <select id="time" {...register("time")} className={fieldClass}>
            <option value="">選択してください</option>
            {TIME_OPTIONS.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
          {errors.time && <p className={errorClass}>{errors.time.message}</p>}
        </div>
      </div>

      {/* 人数 */}
      <div>
        <label htmlFor="guests" className={labelClass}>
          人数 <span className="text-red-500">*</span>
        </label>
        <select id="guests" {...register("guests")} className={`${fieldClass} max-w-xs`}>
          <option value="">選択してください</option>
          {[...Array(20)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}名
            </option>
          ))}
        </select>
        {errors.guests && <p className={errorClass}>{errors.guests.message}</p>}
      </div>

      {/* 名前 × 電話番号 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            お名前 <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="山田 太郎"
            {...register("name")}
            className={fieldClass}
          />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            電話番号 <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="090-0000-0000"
            {...register("phone")}
            className={fieldClass}
          />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>
      </div>

      {/* メールアドレス */}
      <div>
        <label htmlFor="email" className={labelClass}>
          メールアドレス <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="example@email.com"
          {...register("email")}
          className={fieldClass}
        />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>

      {/* ご要望 */}
      <div>
        <label htmlFor="notes" className={labelClass}>
          アレルギー・ご要望
        </label>
        <textarea
          id="notes"
          rows={4}
          placeholder="アレルギーや席のご希望などをご記入ください"
          {...register("notes")}
          className={fieldClass}
        />
      </div>

      {/* エラーバナー */}
      {status === "error" && (
        <div className="flex items-center gap-2 px-4 py-3 bg-red-50 border border-red-200 rounded-sm text-sm text-red-700">
          <AlertCircle size={16} className="shrink-0" />
          送信に失敗しました。時間をおいて再度お試しいただくか、お電話にてお問い合わせください。
        </div>
      )}

      {/* 送信ボタン */}
      <Button
        type="submit"
        size="lg"
        className="w-full sm:w-auto"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            送信中...
          </>
        ) : (
          "予約を申し込む"
        )}
      </Button>

      <p className="text-xs text-[var(--muted-foreground)]">
        <span className="text-red-500">*</span> は必須項目です。
        ご予約内容はメールにてご確認いただけます。
      </p>
    </form>
  );
}
