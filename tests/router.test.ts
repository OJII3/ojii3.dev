import { expect, test } from "bun:test";
import { getRouter } from "../src/router";

test("router registers all portfolio pages", () => {
  const router = getRouter();

  expect(Object.keys(router.routesByPath).sort()).toEqual(["/", "/gallery"]);
});
