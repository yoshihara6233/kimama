import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  date:   z.string().min(1),
  time:   z.string().min(1),
  guests: z.union([z.string(), z.number()]).transform((v) => Number(v)),
  name:   z.string().min(1),
  phone:  z.string().regex(/^[\d\-+() ]+$/),
  email:  z.string().includes("@"),
  notes:  z.string().optional(),
});

const TIME_LABELS: Record<string, string> = {
  "lunch-1130":  "ランチ 11:30",
  "lunch-1200":  "ランチ 12:00",
  "lunch-1300":  "ランチ 13:00",
  "dinner-1700": "ディナー 17:00",
  "dinner-1800": "ディナー 18:00",
  "dinner-1900": "ディナー 19:00",
  "dinner-2000": "ディナー 20:00",
  "dinner-2100": "ディナー 21:00",
};

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid body" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "validation failed", issues: parsed.error.issues }, { status: 422 });
  }

  const data = parsed.data;
  const timeLabel = TIME_LABELS[data.time] ?? data.time;

  // メール送信（環境変数が設定されている場合のみ）
  const resendKey = process.env.RESEND_API_KEY;
  const ownerEmail = process.env.RESERVATION_EMAIL ?? "owner@example.com";

  if (!resendKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json({ ok: true });
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(resendKey);

    const subject = `【きまま】ご予約 ${data.date} ${timeLabel} ${data.name}様 ${data.guests}名`;
    const text = `
新しいご予約が届きました。

━━━━━━━━━━━━━━━━━━━━
お名前：${data.name}
日程：${data.date}（${timeLabel}）
人数：${data.guests}名
電話番号：${data.phone}
メールアドレス：${data.email}
${data.notes ? `ご要望：${data.notes}` : ""}
━━━━━━━━━━━━━━━━━━━━
    `.trim();

    // オーナーへ通知
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ownerEmail,
      subject,
      text,
    });

    // お客様へ確認メール
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: data.email,
      subject: `【きまま】ご予約を受け付けました`,
      text: `
${data.name} 様

この度はきままへのご予約ありがとうございます。
以下の内容でご予約を承りました。

━━━━━━━━━━━━━━━━━━━━
日程：${data.date}（${timeLabel}）
人数：${data.guests}名
${data.notes ? `ご要望：${data.notes}` : ""}
━━━━━━━━━━━━━━━━━━━━

ご不明な点はお電話にてお問い合わせください。
当日のご来店を心よりお待ちしております。

きまま
TEL: 072-236-6461
      `.trim(),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("Email send failed:", msg);
    return NextResponse.json({ ok: true, emailError: msg });
  }
}
