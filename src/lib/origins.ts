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
  { tradition: "Buddhism", region: "South Asia", x: 73.1, y: 34.7 },
];