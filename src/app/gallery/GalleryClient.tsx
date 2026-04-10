"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type GalleryCategory = "all" | "food" | "interior" | "event";

type GalleryItem = {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, "all">;
  gradient: string;
  span?: "wide" | "tall";
};

const items: GalleryItem[] = [
  { id: "g01", title: "もも串 — 備長炭焼き",   category: "food",     gradient: "linear-gradient(135deg,#7a2e0e,#c8922a)", span: "wide" },
  { id: "g02", title: "つくね — 特製甘辛タレ", category: "food",     gradient: "linear-gradient(135deg,#5a1a0a,#a33d15)" },
  { id: "g03", title: "カウンター席",           category: "interior", gradient: "linear-gradient(135deg,#2a1a0a,#4a3728)" },
  { id: "g04", title: "ねぎま — 九条ネギ",      category: "food",     gradient: "linear-gradient(135deg,#3d1508,#7a2e0e)" },
  { id: "g05", title: "店内全景",               category: "interior", gradient: "linear-gradient(135deg,#1a1008,#3d2b1a)", span: "tall" },
  { id: "g06", title: "鶏のたたき",            category: "food",     gradient: "linear-gradient(135deg,#4a2010,#c8922a)" },
  { id: "g07", title: "炭火グリル",             category: "interior", gradient: "linear-gradient(135deg,#0f0704,#3d1508)" },
  { id: "g08", title: "宴会コース",             category: "event",    gradient: "linear-gradient(135deg,#1a2a3a,#2a4a6a)", span: "wide" },
  { id: "g09", title: "せせり串",              category: "food",     gradient: "linear-gradient(135deg,#6b2a08,#b87320)" },
  { id: "g10", title: "個室スペース",           category: "interior", gradient: "linear-gradient(135deg,#2a1a10,#5a3a28)" },
  { id: "g11", title: "忘年会イベント",         category: "event",    gradient: "linear-gradient(135deg,#0a1a2a,#1a3a5a)" },
  { id: "g12", title: "親子丼",                category: "food",     gradient: "linear-gradient(135deg,#5a3010,#c8922a)" },
];

const CATEGORIES: { value: GalleryCategory; label: string }[] = [
  { value: "all",      label: "すべて" },
  { value: "food",     label: "料理" },
  { value: "interior", label: "店内" },
  { value: "event",    label: "イベント" },
];

export function GalleryClient() {
  const [active, setActive] = useState<GalleryCategory>("all");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered = active === "all" ? items : items.filter((i) => i.category === active);
  const currentIndex = lightbox ? filtered.findIndex((i) => i.id === lightbox.id) : -1;

  const prev = () => { if (currentIndex > 0) setLightbox(filtered[currentIndex - 1]); };
  const next = () => { if (currentIndex < filtered.length - 1) setLightbox(filtered[currentIndex + 1]); };

  return (
    <>
      {/* フィルター */}
      <div className="bg-[var(--card)] border-b border-[var(--border)] shadow-sm sticky top-16 md:top-20 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 py-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActive(cat.value)}
                className={`px-5 py-3 text-sm tracking-wide transition-colors rounded-sm ${
                  active === cat.value
                    ? "text-[var(--primary)] border-b-2 border-[var(--primary)] font-medium"
                    : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* グリッド */}
      <div className="bg-[var(--background)] min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] gap-3"
            >
              {filtered.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  onClick={() => setLightbox(item)}
                  className={`relative overflow-hidden rounded-sm group cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-[var(--accent)] ${
                    item.span === "wide" ? "col-span-2" : item.span === "tall" ? "row-span-2" : ""
                  }`}
                  style={{ background: item.gradient }}
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-15 group-hover:opacity-25 transition-opacity">
                    <span className="font-serif text-5xl text-white">
                      {item.category === "food" ? "串" : item.category === "interior" ? "炭" : "宴"}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white text-xs tracking-wide">{item.title}</p>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ライトボックス */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl aspect-[4/3] rounded-sm overflow-hidden"
              style={{ background: lightbox.gradient }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-serif text-8xl text-white/20 mb-4">
                  {lightbox.category === "food" ? "串" : lightbox.category === "interior" ? "炭" : "宴"}
                </span>
                <p className="text-white/60 text-sm tracking-wide">{lightbox.title}</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                aria-label="閉じる"
              >
                <X size={16} />
              </button>
              {currentIndex > 0 && (
                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  aria-label="前の画像"
                >
                  <ChevronLeft size={18} />
                </button>
              )}
              {currentIndex < filtered.length - 1 && (
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  aria-label="次の画像"
                >
                  <ChevronRight size={18} />
                </button>
              )}
            </motion.div>
            <p className="absolute bottom-6 text-white/40 text-xs tracking-widest">
              {currentIndex + 1} / {filtered.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
