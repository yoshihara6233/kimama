export const RESTAURANT = {
  name: "きまま",
  nameEn: "Kimama",
  catchcopy: "備長炭で焼く、こだわりの鳥料理",
  description:
    "備長炭の遠赤外線でじっくり焼き上げる焼き鳥と、鶏の旨みを活かした多彩な鳥料理をご用意しています。産地直送の鶏肉を使った、素材の味を大切にした一皿をお楽しみください。",
  phone: "072-236-6461",
  address: {
    postal: "〒599-8232",
    prefecture: "大阪府",
    city: "堺市中区",
    street: "新家町754-21",
    building: "",
  },
  addressFull: "大阪府堺市中区新家町754-21",
  email: "yoshihara8238@gmail.com",
  googleMapsUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.5!2d135.510986!3d34.5450151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000db003c9dda0b%3A0x3cfa88e2c856f3cc!2z44GN44G-44G-!5e0!3m2!1sja!2sjp!4v1713600000000!5m2!1sja!2sjp",
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
    instagram: "https://www.instagram.com/kimama2025.10/",
    twitter: "https://twitter.com/",
  },
} as const;
