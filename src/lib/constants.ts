export const RESTAURANT = {
  name: "きまま",
  nameEn: "Kimama",
  catchcopy: "備長炭で焼く、こだわりの鳥料理",
  description:
    "備長炭の遠赤外線でじっくり焼き上げる焼き鳥と、鶏の旨みを活かした多彩な鳥料理をご用意しています。産地直送の鶏肉を使った、素材の味を大切にした一皿をお楽しみください。",
  phone: "03-0000-0000",
  address: {
    postal: "〒000-0000",
    prefecture: "東京都",
    city: "渋谷区",
    street: "○○町0-0-0",
    building: "",
  },
  addressFull: "東京都渋谷区○○町0-0-0",
  email: "info@kimama-yakitori.jp",
  googleMapsUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7!2d139.7!3d35.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s0x0!5e0!3m2!1sja!2sjp!4v1234567890",
  hours: [
    { day: "月〜金", lunch: "11:30〜14:00", dinner: "17:00〜23:00" },
    { day: "土・日・祝", lunch: "11:30〜15:00", dinner: "17:00〜22:30" },
  ],
  closed: "不定休",
  seats: 30,
  access: {
    train: "○○線「○○駅」徒歩3分",
    bus: "都バス「○○停留所」から徒歩1分",
    parking: "近隣にコインパーキングあり",
  },
  sns: {
    instagram: "https://instagram.com/",
    twitter: "https://twitter.com/",
  },
} as const;
