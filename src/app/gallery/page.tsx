import { Metadata } from "next";
import { GalleryClient } from "./GalleryClient";

export const metadata: Metadata = {
  title: "ギャラリー",
  description: "きままの料理・店内・イベントの写真ギャラリー。備長炭で焼き上げた焼き鳥や鳥料理の数々をご覧ください。",
};

export default function GalleryPage() {
  return (
    <>
      <div className="pt-20 bg-[var(--secondary)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <p className="text-[var(--accent)] text-xs tracking-[0.4em] uppercase mb-3">Gallery</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white tracking-wide">
            ギャラリー
          </h1>
          <div className="w-10 h-0.5 bg-[var(--accent)] mt-6" />
        </div>
      </div>
      <GalleryClient />
    </>
  );
}
