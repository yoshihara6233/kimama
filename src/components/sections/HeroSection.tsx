"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RESTAURANT } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 背景：炭火グラデーション */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 60% 60%, #5a1a0a 0%, #2a0f05 40%, #0f0704 100%)",
        }}
      />

      {/* 炭の粒子エフェクト（CSS アニメーション） */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="absolute block rounded-full bg-[var(--accent)]"
            style={{
              width: `${4 + i * 2}px`,
              height: `${4 + i * 2}px`,
              left: `${15 + i * 13}%`,
              bottom: `${20 + (i % 3) * 10}%`,
              animation: `ember ${2.5 + i * 0.4}s ease-in-out ${i * 0.3}s infinite alternate`,
              filter: "blur(1px)",
            }}
          />
        ))}
      </div>

      {/* ember アニメーション用スタイル */}
      <style>{`
        @keyframes ember {
          0%   { opacity: 0.2; transform: translateY(0) scale(1); }
          100% { opacity: 0.7; transform: translateY(-20px) scale(1.3); }
        }
      `}</style>

      {/* コンテンツ */}
      <div className="relative z-10 text-center px-4">
        {/* キャッチコピー */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[var(--accent)] text-xs tracking-[0.4em] uppercase mb-6"
        >
          Binchotan Charcoal Grill
        </motion.p>

        {/* 店名 */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-serif text-7xl md:text-9xl font-bold text-white tracking-widest mb-4"
        >
          {RESTAURANT.name}
        </motion.h1>

        {/* 横線 */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-24 h-px bg-[var(--accent)] mx-auto mb-6"
        />

        {/* サブコピー */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-white/70 text-sm md:text-base tracking-widest mb-10"
        >
          {RESTAURANT.catchcopy}
        </motion.p>

        {/* CTAボタン */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button asChild size="lg" variant="accent">
            <Link href="/reservation">ご予約はこちら</Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="border border-white/50 text-white bg-transparent hover:bg-white/10"
          >
            <Link href="/menu">メニューを見る</Link>
          </Button>
        </motion.div>
      </div>

      {/* スクロール促進 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
