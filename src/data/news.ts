export type NewsTag = "お知らせ" | "イベント" | "メニュー" | "休業";

export type NewsItem = {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  tag: NewsTag;
  body: string;
};

export const newsItems: NewsItem[] = [];
