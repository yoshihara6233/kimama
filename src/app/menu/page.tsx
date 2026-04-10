import { Metadata } from "next";
import { MenuClient } from "./MenuClient";

export const metadata: Metadata = {
  title: "メニュー",
  description: "備長炭で焼き上げる焼き鳥や鳥料理のメニュー一覧。もも・ねぎま・つくね・せせりなど厳選した串焼きをご用意しています。",
};

export default function MenuPage() {
  return (
    <>
      <div className="pt-20 bg-[var(--secondary)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <p className="text-[var(--accent)] text-xs tracking-[0.4em] uppercase mb-3">Menu</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white tracking-wide">
            メニュー
          </h1>
          <div className="w-10 h-0.5 bg-[var(--accent)] mt-6" />
        </div>
      </div>
      <MenuClient />
    </>
  );
}
