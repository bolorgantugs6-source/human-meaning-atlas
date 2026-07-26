import { content } from "./content";
import { questions } from "./questions";

export type DatabaseEntry = {
  questionSlug: string;
  questionLabel: string;
  tradition: string;
  facts: string;
  interpretation: string;
};

export const databaseEntries: DatabaseEntry[] = questions.flatMap((q) => {
  const data = content[q.slug];
  if (!data) return [];
  return data.traditions.map((t) => ({
    questionSlug: q.slug,
    questionLabel: q.prompt,
    tradition: t.tradition,
    facts: t.facts,
    interpretation: t.interpretation,
  }));
});