export type Source = {
  title: string;
  author?: string;
  type: "primary" | "reference";
};

export const sources: Record<string, Source[]> = {
  Christianity: [
    { title: "The Bible (NRSV translation)", type: "primary" },
    {
      title: "The Oxford Dictionary of World Religions",
      author: "John Bowker (ed.)",
      type: "reference",
    },
    {
      title: "Encyclopaedia Britannica — \"Christianity\"",
      type: "reference",
    },
  ],
  Buddhism: [
    {
      title: "Pali Canon (translations via SuttaCentral.net and Access to Insight)",
      type: "primary",
    },
    {
      title: "The Oxford Dictionary of World Religions",
      author: "John Bowker (ed.)",
      type: "reference",
    },
    {
      title: "What the Buddha Taught",
      author: "Walpola Rahula",
      type: "reference",
    },
  ],
  Islam: [
    {
      title: "The Quran (M.A.S. Abdel Haleem translation)",
      type: "primary",
    },
    { title: "The Oxford Dictionary of Islam", type: "reference" },
    {
      title: "Islam: The Straight Path",
      author: "John L. Esposito",
      type: "reference",
    },
  ],
  Judaism: [
    { title: "The Hebrew Bible / Tanakh (JPS translation)", type: "primary" },
    {
      title: "The Oxford Dictionary of the Jewish Religion",
      type: "reference",
    },
    {
      title: "Encyclopaedia Britannica — \"Judaism\"",
      type: "reference",
    },
  ],
  Stoicism: [
    { title: "Meditations", author: "Marcus Aurelius", type: "primary" },
    { title: "Enchiridion", author: "Epictetus", type: "primary" },
    { title: "Letters from a Stoic", author: "Seneca", type: "primary" },
    {
      title: "Stanford Encyclopedia of Philosophy — \"Stoicism\"",
      type: "reference",
    },
  ],
};