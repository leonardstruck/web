import { Order } from "effect";
import type { CollectionEntry } from "astro:content";

export const byDate = Order.mapInput(
  Order.Date,
  (entry: CollectionEntry<"blog">) => entry.data.date,
);

export const isPublished = (entry: CollectionEntry<"blog">) =>
  !entry.data.draft;
