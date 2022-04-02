import fs from "fs/promises";
import path from "path";
import rewire from "rewire";
import { it, expect, describe } from "@jest/globals";
import acorn from "acorn";

const filePath = path.join("..", "..", "task-1", "main.js");
const mainScript = rewire(filePath);

const [makeLegend, vowelCelebs, legendaryCelebs] = [
  "makeLegend",
  "vowelCelebs",
  "legendaryCelebs",
].map((variableName) => {
  try {
    return mainScript.__get__(variableName);
  } catch (error) {
    if (
      "ReferenceError" !== error.name ||
      `${variableName} is not defined` !== error.message
    ) {
      throw error;
    }
  }
});

const rawScript = await fs.readFile(filePath, { encoding: "utf-8" });
const parsed = acorn.parse(rawScript, { ecmaVersion: "latest" });

describe("makeLegend", () => {
  it("should be defined in main.js", () => {
    expect(makeLegend).toBeDefined();
  });

  it("should be a function", () => {
    expect(makeLegend).toStrictEqual(expect.any(Function));
  });

  it.each([
    ["Chris", "Chris is now a legend."],
    ["George", "George is now a legend."],
    ["Alex", "Alex is now a legend."],
    ["ABCDEFG", "ABCDEFG is now a legend."],
  ])('makeLegend("%s") should return "%s"', (name, expected) => {
    const actual = makeLegend(name);
    expect(actual).toBe(expected);
  });

  it("should have exactly one parameter", () => {
    expect(makeLegend).toHaveLength(1);
  });

  it("should have a parameter called 'name'", () => {
    const ast = acorn.parse(makeLegend.toString(), {
      ecmaVersion: "latest",
    });
    const parameters = ast.body[0].expression?.params ?? ast.body[0].params;
    const firstParameter = parameters[0];
    expect(firstParameter.name).toBe("name");
  });
});

describe("legendaryCelebs", () => {
  it("should be defined in main.js", () => {
    expect(legendaryCelebs).toBeDefined();
  });

  it("should be an array", () => {
    // toStrictEqual(expect.any(Array)) doesn't pass (for some reason)
    expect(Array.isArray(legendaryCelebs)).toBe(true);
  });

  it("should only contain expected values", () => {
    // Strange, seem to have to spread into a new array.
    // Not yet sure why the array provided by rewire doesn't satisfy the 'toStrictEqual' matcher.
    // They don't seem to serialise to the same string.

    expect([...legendaryCelebs]).toStrictEqual([
      "David Beckham is now a legend.",
      "Cher is now a legend.",
      "Madonna is now a legend.",
      "Tom Petty is now a legend.",
      "Cristiano Ronaldo is now a legend.",
      "Whoopi Goldberg is now a legend.",
      "Samuel L Jackson is now a legend.",
      "Angelina Jolie is now a legend.",
      "Richard Osman is now a legend.",
      "Emma Thompson is now a legend.",
    ]);
  });

  // Maybe write more tests to check certain implementation details or AST assertions?
  it.todo("should use Array.prototype.map to create 'legendaryCelebs'");
  it.todo("should map over the 'celebs' array");
  it.todo(
    "should pass 'makeLegend' (or an anonymous function that wraps 'makeLegend') to Array.prototype.map"
  );
});

describe("vowelCelebs", () => {
  it("should be defined in main.js", () => {
    expect(vowelCelebs).toBeDefined();
  });

  it("should be an array only containing expected values", () => {
    // toStrictEqual(["Angelina Jolie", "Emma Thompson"]) doesn't pass (for some reason)
    expect(Array.isArray(vowelCelebs)).toBe(true);
    // Strange, seem to have to spread into a new array.
    // Not yet sure why the array provided by rewire doesn't directly satisfy the 'toStrictEqual' matcher.
    // Expected and actual don't seem to serialise to the same string.
    expect([...vowelCelebs]).toStrictEqual(["Angelina Jolie", "Emma Thompson"]);
  });

  // Maybe write some more tests which check certain implementation details or AST assertions?
  it.todo("should use Array.prototype.filter to create 'vowelCelebs'");
  it.todo("should filter the 'celebs' array");
});

it.todo("index.html should pass linting checks");
it.todo("main.js should pass linting checks");
