"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { menuItems } from "@/data/menu";

const recommended = menuItems.filter((item) => item.isRecommended).slice(0, 4);

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// カテゴリごとの背景カラー
const categoryColors: Record<string, string> = {
  yakitori: "linear-gradient(135deg, #7a2e0e 0%, #c8922a 100%)",
  chicken: "linear-gradient(135deg, #4a3728 0%, #7a2e0e 100%)",
  side: "linear-gradient(135deg, #3d2b1a 0%, #6b5140 100%)",
  drink: "linear-gradient(135deg, #1a2a3a 0%, #2a4a6a 100%)",
};

export function MenuHighlight() {
  return (
    <section className="py-24 md:py-32 bg-[var(--muted)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="section-title-en mb-3">Recommended</p>
          <h2 className="section-title text-3xl md:text-4xl font-bold text-[var(--foreground)]">
            おすすめメニュー
          </h2>
          <div className="w-10 h-0.5 bg-[var(--accent)] mx-auto mt-6" />
        </motion.div>

        {/* カードグリッド */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {recommended.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className="bg-[var(--card)] rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              {/* 画像エリア（プレースホルダー） */}
              <div
                className="aspect-[4/3] relative overflow-hidden"
                style={{ background: categoryColors[item.category] }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-4xl text-white/30 group-hover:scale-110 transition-transform duration-500">
                    串
                  </span>
                </div>
                {item.unit && (
                  <span className="absolute top-3 right-3 bg-black/40 text-white text-[10px] px-2 py-0.5 rounded-full tracking-wide">
                    {item.price.toLocaleString()}円/{item.unit}
                  </span>
                )}
              </div>

              {/* テキスト */}
              <div className="p-4">
                <h3 className="font-serif text-lg font-bold text-[var(--foreground)] tracking-wide mb-1">
                  {item.name}
                </h3>
                {item.nameEn && (
                  <p className="text-[10px] text-[var(--accent)] tracking-widest uppercase mb-2">
                    {item.nameEn}
                  </p>
                )}
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  {item.description}
                </p>
                {!item.unit && (
                  <p className="text-sm font-medium text-[var(--primary)] mt-3">
                    ¥{item.price.toLocaleString()}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* メニュー一覧へ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button asChild variant="outline" size="lg">
            <Link href="/menu">全メニューを見る</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
