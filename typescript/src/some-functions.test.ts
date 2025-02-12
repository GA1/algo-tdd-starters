import { describe, expect, test } from "vitest";
import { someFunction1, someFunction2 } from "./some-functions";

describe("tests", () => {
  test("someFunction1", () => {
    expect(someFunction1()).toEqual(5);
  });

  test("someFunction2", () => {
    expect(() => someFunction2()).toThrow(Error("some error"));
  });
});
