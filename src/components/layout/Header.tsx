"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { RESTAURANT } from "@/lib/constants";

const navLinks = [
  { href: "/menu", label: "メニュー" },
  { href: "/gallery", label: "ギャラリー" },
  { href: "/access", label: "アクセス" },
  { href: "/news", label: "お知らせ" },
  { href: "/reservation", label: "ご予約" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[var(--card)] shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* ロゴ */}
          <Link
            href="/"
            className="flex flex-col leading-tight"
            onClick={() => setIsMenuOpen(false)}
          >
            <span
              className={cn(
                "font-serif text-xl md:text-2xl font-bold tracking-widest transition-colors",
                isScrolled ? "text-[var(--primary)]" : "text-white drop-shadow"
              )}
            >
              {RESTAURANT.name}
            </span>
            <span
              className={cn(
                "text-[10px] tracking-[0.3em] uppercase transition-colors",
                isScrolled ? "text-[var(--accent)]" : "text-white/80 drop-shadow"
              )}
            >
              {RESTAURANT.nameEn}
            </span>
          </Link>

          {/* PC ナビ */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm tracking-wide transition-colors hover:text-[var(--accent)]",
                  isScrolled ? "text-[var(--foreground)]" : "text-white drop-shadow"
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${RESTAURANT.phone}`}
              className={cn(
                "flex items-center gap-1.5 text-sm transition-colors",
                isScrolled ? "text-[var(--primary)]" : "text-white drop-shadow"
              )}
            >
              <Phone size={14} />
              {RESTAURANT.phone}
            </a>
          </nav>

          {/* モバイル ハンバーガー */}
          <button
            className={cn(
              "md:hidden p-2 transition-colors",
              isScrolled ? "text-[var(--foreground)]" : "text-white"
            )}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニューを開く"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* モバイル ドロワー */}
      {isMenuOpen && (
        <div className="md:hidden bg-[var(--card)] border-t border-[var(--border)] shadow-lg">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 px-2 text-[var(--foreground)] hover:text-[var(--primary)] border-b border-[var(--border)] last:border-0 tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${RESTAURANT.phone}`}
              className="flex items-center gap-2 py-3 px-2 text-[var(--primary)] font-medium"
            >
              <Phone size={16} />
              {RESTAURANT.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
