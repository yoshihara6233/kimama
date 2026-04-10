import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--background)] px-4 text-center">
      <p className="font-serif text-8xl font-bold text-[var(--primary)] opacity-20 mb-0 leading-none">
        404
      </p>
      <h1 className="font-serif text-2xl font-bold text-[var(--foreground)] mt-4 mb-2 tracking-wide">
        ページが見つかりません
      </h1>
      <p className="text-sm text-[var(--muted-foreground)] mb-8 leading-relaxed max-w-sm">
        お探しのページは移動または削除された可能性があります。
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button asChild size="lg">
          <Link href="/">トップページへ</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/menu">メニューを見る</Link>
        </Button>
      </div>
    </div>
  );
}
