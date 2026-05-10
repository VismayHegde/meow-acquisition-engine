import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { getWheelDirection, shouldThrottleWheel } from "../focus-rail-logic";

const HERE = dirname(fileURLToPath(import.meta.url));
const FIXTURES = join(HERE, "..", "__fixtures__", "focus-rail");

type WheelFixture = {
  deltaX: number;
  deltaY: number;
  expected: "next" | "prev" | null;
};

test("wheel direction fixture covers horizontal and vertical gesture mapping", () => {
  const rows = JSON.parse(
    readFileSync(join(FIXTURES, "wheel-events.json"), "utf8"),
  ) as WheelFixture[];

  for (const row of rows) {
    assert.equal(
      getWheelDirection(row.deltaX, row.deltaY, 20),
      row.expected,
      `deltaX=${row.deltaX} deltaY=${row.deltaY}`,
    );
  }
});

test("wheel throttle blocks rapid repeat events and allows post-cooldown input", () => {
  assert.equal(shouldThrottleWheel(1000, 800, 400), true);
  assert.equal(shouldThrottleWheel(1201, 800, 400), false);
});
