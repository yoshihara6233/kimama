export const RESTAURANT = {
  name: "きまま",
  nameEn: "Kimama",
  catchcopy: "備長炭で焼く、こだわりの鳥料理",
  description:
    "備長炭の遠赤外線でじっくり焼き上げる焼き鳥と、鶏の旨みを活かした多彩な鳥料理をご用意しています。産地直送の鶏肉を使った、素材の味を大切にした一皿をお楽しみください。",
  phone: "03-0000-0000",
  address: {
    postal: "〒599-8232",
    prefecture: "大阪府",
    city: "堺市中区",
    street: "新家町754-21",
    building: "",
  },
  addressFull: "大阪府堺市中区新家町754-21",
  email: "info@kimama-yakitori.jp",
  googleMapsUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.3!2d135.5!3d34.53!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e0a6b0b0b0b0%3A0x0!2z5aSn5a2m55S677yZ77yZ77yZ!5e0!3m2!1sja!2sjp!4v1234567890",
  hours: [
    { day: "月・火・木", lunch: "11:00〜14:00", dinner: null },
    { day: "水・金",     lunch: "11:00〜14:00", dinner: "18:00〜22:00" },
    { day: "土",         lunch: null,            dinner: "18:00〜22:00" },
  ],
  closed: "日曜日",
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
