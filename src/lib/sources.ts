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
  Hinduism: [
    {
      title: "The Bhagavad Gita",
      author: "trans. Eknath Easwaran",
      type: "primary",
    },
    { title: "The Upanishads", type: "primary" },
    {
      title: "The Oxford Dictionary of World Religions",
      author: "John Bowker (ed.)",
      type: "reference",
    },
    {
      title: "Encyclopaedia Britannica — \"Hinduism\"",
      type: "reference",
    },
  ],
  Confucianism: [
    {
      title: "The Analects",
      author: "Confucius, trans. Arthur Waley",
      type: "primary",
    },
    { title: "Mencius", type: "primary" },
    {
      title: "The Oxford Dictionary of World Religions",
      author: "John Bowker (ed.)",
      type: "reference",
    },
    {
      title: "Encyclopaedia Britannica — \"Confucianism\"",
      type: "reference",
    },
  ],
  Sikhism: [
    { title: "The Guru Granth Sahib", type: "primary" },
    {
      title: "The Oxford Dictionary of World Religions",
      author: "John Bowker (ed.)",
      type: "reference",
    },
    {
      title: "Encyclopaedia Britannica — \"Sikhism\"",
      type: "reference",
    },
  ],
  Taoism: [
    {
      title: "Tao Te Ching",
      author: "Laozi, trans. D.C. Lau",
      type: "primary",
    },
    { title: "Zhuangzi", type: "primary" },
    {
      title: "The Oxford Dictionary of World Religions",
      author: "John Bowker (ed.)",
      type: "reference",
    },
    {
      title: "Encyclopaedia Britannica — \"Taoism\"",
      type: "reference",
    },
  ],
  Jainism: [
    {
      title: "Tattvartha Sutra",
      author: "Umasvati",
      type: "primary",
    },
    { title: "Acaranga Sutra", type: "primary" },
    {
      title: "The Oxford Dictionary of World Religions",
      author: "John Bowker (ed.)",
      type: "reference",
    },
    {
      title: "Encyclopaedia Britannica — \"Jainism\"",
      type: "reference",
    },
  ],
  Shinto: [
    { title: "Kojiki", type: "primary" },
    { title: "Nihon Shoki", type: "primary" },
    {
      title: "The Oxford Dictionary of World Religions",
      author: "John Bowker (ed.)",
      type: "reference",
    },
    {
      title: "Encyclopaedia Britannica — \"Shinto\"",
      type: "reference",
    },
  ],
  Zoroastrianism: [
    { title: "The Avesta", type: "primary" },
    { title: "The Oxford Dictionary of World Religions", author: "John Bowker (ed.)", type: "reference" },
    { title: "Encyclopaedia Britannica — \"Zoroastrianism\"", type: "reference" },
  ],
  "Bahá'í Faith": [
    { title: "Kitáb-i-Aqdas", author: "Bahá'u'lláh", type: "primary" },
    { title: "The Oxford Dictionary of World Religions", author: "John Bowker (ed.)", type: "reference" },
    { title: "Encyclopaedia Britannica — \"Bahá'í Faith\"", type: "reference" },
  ],
  Rastafari: [
    { title: "The Holy Piby", author: "Robert Athlyi Rogers", type: "primary" },
    { title: "The Bible (King James Version, as reinterpreted)", type: "primary" },
    { title: "Encyclopaedia Britannica — \"Rastafari\"", type: "reference" },
  ],
  "Latter-day Saints (Mormonism)": [
    { title: "The Book of Mormon", type: "primary" },
    { title: "Doctrine and Covenants", type: "primary" },
    { title: "Encyclopaedia Britannica — \"The Church of Jesus Christ of Latter-day Saints\"", type: "reference" },
  ],
  "Secular Humanism": [
    { title: "Humanist Manifesto III", type: "primary" },
    { title: "Encyclopaedia Britannica — \"Humanism\"", type: "reference" },
  ],
  Wicca: [
    { title: "Witchcraft Today", author: "Gerald Gardner", type: "primary" },
    { title: "Encyclopaedia Britannica — \"Wicca\"", type: "reference" },
  ],
  "Unitarian Universalism": [
    { title: "The Seven Principles", author: "Unitarian Universalist Association", type: "primary" },
    { title: "Encyclopaedia Britannica — \"Unitarian Universalism\"", type: "reference" },
  ],
  "Haitian Vodou": [
    { title: "Divine Horsemen: The Living Gods of Haiti", author: "Maya Deren", type: "reference" },
    { title: "Encyclopaedia Britannica — \"Vodou\"", type: "reference" },
  ],
  "Ancient Egyptian Religion": [
    { title: "The Egyptian Book of the Dead", type: "primary" },
    { title: "The Pyramid Texts", type: "primary" },
    { title: "Encyclopaedia Britannica — \"ancient Egyptian religion\"", type: "reference" },
  ],
  Manichaeism: [
    { title: "The Kephalaia of the Teacher", type: "primary" },
    { title: "Encyclopaedia Britannica — \"Manichaeism\"", type: "reference" },
  ],
};
