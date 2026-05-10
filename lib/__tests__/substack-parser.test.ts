import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { mergeAndSortSubstackPosts, parseSubstackXml } from "../substack-parser";

const HERE = dirname(fileURLToPath(import.meta.url));
const FIXTURES = join(HERE, "..", "__fixtures__", "substack");

function fixture(name: string): string {
  return readFileSync(join(FIXTURES, name), "utf8");
}

test("parseSubstackXml parses both description and content:encoded items", () => {
  const posts = parseSubstackXml(fixture("feed-basic.xml"));
  assert.equal(posts.length, 2);
  assert.equal(posts[0].title, "Launch Notes");
  assert.equal(posts[0].excerpt, "Short update for launch.");
  assert.equal(posts[1].title, "Deep Dive");
  assert.equal(posts[1].excerpt, "Long form content block.");
});

test("parseSubstackXml handles single-item RSS payload shape", () => {
  const posts = parseSubstackXml(fixture("feed-single-item.xml"));
  assert.equal(posts.length, 1);
  assert.equal(posts[0].title, "Only Post");
  assert.equal(posts[0].link, "https://example.com/only-post");
});

test("mergeAndSortSubstackPosts keeps newest post first", () => {
  const dynamic = parseSubstackXml(fixture("feed-basic.xml"));
  const curated = [
    {
      title: "Curated",
      link: "https://example.com/curated",
      pubDate: "Wed, 14 May 2026 10:00:00 GMT",
      excerpt: "Curated extra post.",
    },
  ];
  const merged = mergeAndSortSubstackPosts(dynamic, curated);
  assert.equal(merged[0].title, "Curated");
  assert.equal(merged[1].title, "Deep Dive");
});
