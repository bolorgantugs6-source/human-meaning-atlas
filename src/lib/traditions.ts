import { content } from "./content";

export const allTraditions = Array.from(
  new Set(
    Object.values(content).flatMap((q) =>
      q.traditions.map((t) => t.tradition)
    )
  )
).sort();