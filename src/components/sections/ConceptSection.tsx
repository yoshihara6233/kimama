"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export function ConceptSection() {
  return (
    <section className="py-24 md:py-32 bg-[var(--background)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* テキスト */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="section-title-en mb-3">Our Concept</p>
            <h2 className="section-title text-3xl md:text-4xl font-bold text-[var(--foreground)] leading-snug mb-6">
              備長炭の火が引き出す、<br />
              鶏本来の旨み。
            </h2>
            <div className="w-10 h-0.5 bg-[var(--accent)] mb-8" />
            <p className="text-[var(--muted-foreground)] leading-loose text-sm md:text-base">
              「きまま」は、備長炭の遠赤外線でじっくりと焼き上げる焼き鳥と、
              鶏の旨みを活かした多彩な鳥料理を提供するお店です。
            </p>
            <p className="text-[var(--muted-foreground)] leading-loose text-sm md:text-base mt-4">
              産地直送の国産鶏にこだわり、一本一本を丁寧に串打ち。
              素材の味を大切にしながら、タレと塩の両方でお楽しみいただけます。
            </p>
            <p className="text-[var(--muted-foreground)] leading-loose text-sm md:text-base mt-4">
              日常の喧騒を忘れ、気ままにゆったりとお過ごしください。
            </p>
          </motion.div>

          {/* ビジュアル装飾 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* メインボックス */}
            <div
              className="aspect-[4/5] rounded-sm overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #3d1508 0%, #7a2e0e 40%, #c8922a 100%)",
              }}
            >
              {/* 炭火テクスチャー風オーバーレイ */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `radial-gradient(circle at 25% 25%, #ffffff15 1px, transparent 1px),
                    radial-gradient(circle at 75% 75%, #ffffff10 1px, transparent 1px)`,
                  backgroundSize: "24px 24px",
                }}
              />
              {/* 中央テキスト */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white/80">
                <span className="font-serif text-6xl font-bold tracking-widest mb-2">炭</span>
                <span className="text-xs tracking-[0.4em] text-white/50 uppercase">
                  Binchotan
                </span>
              </div>
            </div>

            {/* 背面の装飾ボックス */}
            <div
              className="absolute -bottom-4 -right-4 w-4/5 h-4/5 border border-[var(--accent)]/30 rounded-sm -z-10"
            />

            {/* 実績バッジ */}
            <div className="absolute -left-6 bottom-12 bg-[var(--primary)] text-white px-4 py-3 rounded-sm shadow-lg">
              <p className="text-xs text-white/70 tracking-widest">国産鶏</p>
              <p className="font-serif text-lg font-bold tracking-wide">産地直送</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
