import type { CollectionEntry, CollectionKey } from "astro:content";
import readingTime from "reading-time";
import { toString } from "mdast-util-to-string";
import { fromMarkdown } from "mdast-util-from-markdown";

export const getReadingTime = <T extends CollectionKey>(
  entry: CollectionEntry<T>,
) => {
  return readingTime(toString(fromMarkdown(entry.body ?? "")));
};
