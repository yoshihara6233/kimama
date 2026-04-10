export type MenuCategory = "yakitori" | "chicken" | "side" | "drink";

export type MenuItem = {
  id: string;
  name: string;
  nameEn?: string;
  description: string;
  price: number;
  unit?: string; // "本", "皿" など
  category: MenuCategory;
  allergens?: string[];
  image?: string;
  isRecommended?: boolean;
};

export const MENU_CATEGORIES: { value: MenuCategory; label: string }[] = [
  { value: "yakitori", label: "焼き鳥" },
  { value: "chicken", label: "鳥料理" },
  { value: "side", label: "おつまみ・一品" },
  { value: "drink", label: "ドリンク" },
];

export const menuItems: MenuItem[] = [
  // 焼き鳥
  {
    id: "y01",
    name: "もも",
    nameEn: "Thigh",
    description: "ジューシーな鶏もも肉。タレ・塩お選びいただけます。",
    price: 180,
    unit: "本",
    category: "yakitori",
    isRecommended: true,
  },
  {
    id: "y02",
    name: "ねぎま",
    nameEn: "Negima",
    description: "鶏もも肉と九条ネギを交互に刺した定番串。",
    price: 190,
    unit: "本",
    category: "yakitori",
    isRecommended: true,
  },
  {
    id: "y03",
    name: "つくね",
    nameEn: "Tsukune",
    description: "手ごねのふわふわつくね。特製甘辛タレで。",
    price: 200,
    unit: "本",
    category: "yakitori",
    isRecommended: true,
  },
  {
    id: "y04",
    name: "皮",
    nameEn: "Skin",
    description: "パリパリに焼いた鶏皮。塩でどうぞ。",
    price: 160,
    unit: "本",
    category: "yakitori",
  },
  {
    id: "y05",
    name: "砂肝",
    nameEn: "Gizzard",
    description: "コリコリとした食感の砂肝。塩・レモン仕上げ。",
    price: 170,
    unit: "本",
    category: "yakitori",
  },
  {
    id: "y06",
    name: "ハツ",
    nameEn: "Heart",
    description: "ぷりっとした食感の鶏ハツ。シンプルに塩で。",
    price: 170,
    unit: "本",
    category: "yakitori",
  },
  {
    id: "y07",
    name: "せせり",
    nameEn: "Seseri",
    description: "首まわりの希少部位。旨みが濃く、やわらかい。",
    price: 200,
    unit: "本",
    category: "yakitori",
    isRecommended: true,
  },
  {
    id: "y08",
    name: "レバー",
    nameEn: "Liver",
    description: "とろっとしたレバー串。生姜醤油でさっぱりと。",
    price: 180,
    unit: "本",
    category: "yakitori",
  },
  // 鳥料理
  {
    id: "c01",
    name: "鶏のたたき",
    nameEn: "Chicken Tataki",
    description: "備長炭で炙った国産鶏のたたき。ポン酢でさっぱりと。",
    price: 780,
    category: "chicken",
    isRecommended: true,
    allergens: ["小麦", "大豆"],
  },
  {
    id: "c02",
    name: "若鶏の唐揚げ",
    nameEn: "Karaage",
    description: "醤油・生姜で漬け込んだ国産若鶏のサクサク唐揚げ。",
    price: 680,
    category: "chicken",
    allergens: ["小麦", "大豆"],
  },
  {
    id: "c03",
    name: "親子丼",
    nameEn: "Oyakodon",
    description: "だし香る半熟卵と地鶏の親子丼。〆の一品に。",
    price: 850,
    category: "chicken",
    isRecommended: true,
    allergens: ["卵", "小麦", "大豆"],
  },
  {
    id: "c04",
    name: "鶏スープ",
    nameEn: "Chicken Soup",
    description: "長時間炊いた鶏ガラスープ。体に沁みる優しい味わい。",
    price: 380,
    category: "chicken",
  },
  // おつまみ
  {
    id: "s01",
    name: "出汁巻き玉子",
    nameEn: "Dashi Tamago",
    description: "丁寧に巻いた出汁巻き。おろし大根を添えて。",
    price: 480,
    category: "side",
    allergens: ["卵"],
  },
  {
    id: "s02",
    name: "枝豆",
    nameEn: "Edamame",
    description: "塩茹でした旬の枝豆。",
    price: 350,
    category: "side",
  },
  {
    id: "s03",
    name: "鶏皮ポン酢",
    nameEn: "Torikawa Ponzu",
    description: "コリコリの鶏皮をポン酢でさっぱりと。",
    price: 420,
    category: "side",
    allergens: ["大豆"],
  },
  // ドリンク
  {
    id: "d01",
    name: "生ビール",
    nameEn: "Draft Beer",
    description: "キンキンに冷えた生ビール。",
    price: 600,
    category: "drink",
  },
  {
    id: "d02",
    name: "ハイボール",
    nameEn: "Highball",
    description: "国産ウイスキーのすっきりハイボール。",
    price: 480,
    category: "drink",
  },
  {
    id: "d03",
    name: "梅酒ソーダ",
    nameEn: "Umeshu Soda",
    description: "自家製梅酒をソーダで割った一杯。",
    price: 520,
    category: "drink",
  },
  {
    id: "d04",
    name: "ソフトドリンク",
    nameEn: "Soft Drink",
    description: "ウーロン茶・コーラ・オレンジジュースなど。",
    price: 300,
    category: "drink",
  },
];
