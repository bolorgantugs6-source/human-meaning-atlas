export type Origin = {
  tradition: string;
  region: string;
  x: number; // percentage from left
  y: number; // percentage from top
};

export const origins: Origin[] = [
  { tradition: "Judaism", region: "Levant", x: 53, y: 34 },
  { tradition: "Christianity", region: "Eastern Mediterranean", x: 54, y: 33 },
  { tradition: "Islam", region: "Arabian Peninsula", x: 57, y: 39 },
  { tradition: "Stoicism", region: "Ancient Greece", x: 50, y: 29 },
  { tradition: "Buddhism", region: "South Asia", x: 66, y: 42 },
];