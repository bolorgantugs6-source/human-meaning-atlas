export type Origin = {
  tradition: string;
  region: string;
  x: number;
  y: number;
};

export const origins: Origin[] = [
  { tradition: "Stoicism", region: "Ancient Greece", x: 56.6, y: 28.9 },
  { tradition: "Judaism", region: "Levant", x: 60.8, y: 33.5 },
  { tradition: "Christianity", region: "Eastern Mediterranean", x: 58.5, y: 30.5 },
  { tradition: "Islam", region: "Arabian Peninsula", x: 62.5, y: 39.5 },
  { tradition: "Buddhism", region: "South Asia (Lumbini)", x: 73.1, y: 34.7 },
  { tradition: "Hinduism", region: "Indus/Ganges Plain", x: 71.5, y: 37.5 },
  { tradition: "Confucianism", region: "Eastern China", x: 82, y: 33 },
  { tradition: "Sikhism", region: "Punjab", x: 69.5, y: 33.8 },
  { tradition: "Taoism", region: "Eastern China", x: 80.5, y: 31 },
  { tradition: "Jainism", region: "Northeastern India", x: 72, y: 39 },
  { tradition: "Shinto", region: "Japan", x: 89, y: 33 },
];