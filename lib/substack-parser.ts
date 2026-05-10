import { XMLParser } from "fast-xml-parser";
import type { SubstackPost } from "./data";

function toExcerpt(raw: string): string {
  const stripped = String(raw || "").replace(/<[^>]*>/g, "").trim();
  return stripped.length > 200 ? `${stripped.slice(0, 200)}...` : stripped;
}

export function parseSubstackXml(xml: string): SubstackPost[] {
  const parser = new XMLParser({ ignoreAttributes: false });
  const parsed = parser.parse(xml);
  const items = parsed?.rss?.channel?.item;
  const itemArray = items ? (Array.isArray(items) ? items : [items]) : [];

  return itemArray.map((item: Record<string, string>) => {
    const rawDesc = item["description"] || item["content:encoded"] || "";
    return {
      title: item.title || "Untitled",
      link: item.link || "#",
      pubDate: item.pubDate || "",
      excerpt: toExcerpt(rawDesc),
    };
  });
}

export function mergeAndSortSubstackPosts(
  dynamicPosts: SubstackPost[],
  curatedPosts: SubstackPost[],
): SubstackPost[] {
  return [...dynamicPosts, ...curatedPosts].sort(
    (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime(),
  );
}
