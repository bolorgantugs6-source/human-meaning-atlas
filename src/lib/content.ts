export type TraditionEntry = {
  tradition: string;
  facts: string;
  interpretation: string;
};

export type QuestionContent = {
  slug: string;
  intro: string;
  traditions: TraditionEntry[];
};

export const content: Record<string, QuestionContent> = {
  death: {
    slug: "death",
    intro:
      "Few questions are asked as universally as what happens when we die. The traditions below differ not just in their answers, but in what kind of answer they consider meaningful — a promise, a process, a mystery, or a return.",
    traditions: [
      {
        tradition: "Christianity",
        facts:
          "Core texts (the New Testament) describe bodily resurrection and eternal life, with judgment determining the soul's fate. Denominations vary widely on details like purgatory, the timing of judgment, and the nature of heaven and hell.",
        interpretation:
          "Scholars often read Christian death theology as answering an implicit hope: that moral struggle in this life has ultimate meaning, vindicated in an afterlife.",
      },
      {
        tradition: "Buddhism",
        facts:
          "Death is understood through the doctrine of rebirth (samsara), driven by karma, continuing until liberation (nirvana) is achieved. There is no permanent, unchanging soul that travels between lives — what continues is a causal process, not a fixed self.",
        interpretation:
          "This framework is often read by scholars as reframing death itself as the wrong question — the deeper issue is attachment and the illusion of a fixed self, not mortality per se.",
      },
      {
        tradition: "Islam",
        facts:
          "The Quran describes death as a transition to barzakh, an intermediate state, followed by bodily resurrection and judgment on the Day of Reckoning, leading to Paradise or Hell.",
        interpretation:
          "Islamic eschatology is frequently characterized by scholars as emphasizing moral accountability — death is not an end but a checkpoint in a continuous relationship with God's justice.",
      },
      {
        tradition: "Judaism",
        facts:
          "Beliefs about the afterlife are notably less doctrinally fixed than in Christianity or Islam. Historical and denominational views range from Sheol (a shadowy underworld) to bodily resurrection to focus on this-worldly ethical life over metaphysical speculation.",
        interpretation:
          "Many scholars note this openness reflects Judaism's broader emphasis on right action and communal life in the present, rather than a settled doctrine of what follows death.",
      },
      {
        tradition: "Stoicism",
        facts:
          "Stoic philosophers (e.g. Epictetus, Marcus Aurelius, Seneca) held that death is a natural transformation, not an evil — the individual returns to the elements from which they came. Stoicism generally does not affirm a personal afterlife; some Stoics entertained the soul persisting temporarily before dissolving back into the cosmos.",
        interpretation:
          "Scholars often frame Stoic death-acceptance as central to its ethical project: since death is outside our control, fearing it is treated as a category error — training oneself not to fear death is treated as inseparable from living virtuously.",
      },
    ],
  },
};