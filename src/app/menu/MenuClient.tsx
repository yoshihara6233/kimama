"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuItems, MENU_CATEGORIES, type MenuCategory } from "@/data/menu";

const categoryColors: Record<MenuCategory, string> = {
  yakitori: "linear-gradient(135deg, #7a2e0e 0%, #c8922a 100%)",
  chicken:  "linear-gradient(135deg, #4a3728 0%, #7a2e0e 100%)",
  side:     "linear-gradient(135deg, #3d2b1a 0%, #6b5140 100%)",
  drink:    "linear-gradient(135deg, #1a2a3a 0%, #2a4a6a 100%)",
};

export function MenuClient() {
  const [active, setActive] = useState<MenuCategory>("yakitori");
  const filtered = menuItems.filter((item) => item.category === active);

  return (
    <>
      {/* カテゴリタブ */}
      <div className="sticky top-16 md:top-20 z-30 bg-[var(--card)] border-b border-[var(--border)] shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-1 py-1">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActive(cat.value)}
                className={`shrink-0 px-5 py-3 text-sm tracking-wide transition-colors rounded-sm ${
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

      {/* メニューコンテンツ */}
      <div className="bg-[var(--background)] min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {active === "yakitori" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-8 px-4 py-3 bg-[var(--muted)] border-l-2 border-[var(--accent)] text-sm text-[var(--muted-foreground)]"
            >
              焼き鳥はすべて<span className="font-medium text-[var(--foreground)]">タレ・塩</span>からお選びいただけます。
            </motion.div>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filtered.map((item) => (
                <div
                  key={item.id}
                  className="bg-[var(--card)] rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div
                    className="h-32 relative overflow-hidden"
                    style={{ background: categoryColors[item.category] }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity">
                      <span className="font-serif text-5xl text-white">串</span>
                    </div>
                    {item.isRecommended && (
                      <span className="absolute top-2 left-2 bg-[var(--accent)] text-white text-[10px] px-2 py-0.5 rounded-full tracking-wide">
                        おすすめ
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h2 className="font-serif text-base font-bold text-[var(--foreground)] tracking-wide">
                        {item.name}
                      </h2>
                      <span className="text-sm font-medium text-[var(--primary)] shrink-0">
                        ¥{item.price.toLocaleString()}
                        {item.unit && <span className="text-xs text-[var(--muted-foreground)]">/{item.unit}</span>}
                      </span>
                    </div>
                    {item.nameEn && (
                      <p className="text-[10px] text-[var(--accent)] tracking-widest uppercase mb-2">
                        {item.nameEn}
                      </p>
                    )}
                    <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                      {item.description}
                    </p>
                    {item.allergens && item.allergens.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-3">
                        {item.allergens.map((a) => (
                          <span key={a} className="text-[9px] px-1.5 py-0.5 bg-[var(--muted)] text-[var(--muted-foreground)] rounded">
                            {a}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <p className="mt-12 text-xs text-[var(--muted-foreground)] text-center leading-relaxed">
            価格はすべて税込です。アレルゲン情報はスタッフにお尋ねください。<br />
            仕入れ状況により一部メニューをお出しできない場合がございます。
          </p>
        </div>
      </div>
    </>
  );
}
