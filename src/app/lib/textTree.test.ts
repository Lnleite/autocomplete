import exp from "constants";
import { TextTree } from "./textTree";

describe("Text tree tests", () => {
  let textTree = new TextTree();

  afterEach(() => {
    textTree = new TextTree();
  });

  test("add word to the tree", () => {
    textTree.addWord("string");
    const isFound = textTree.findWord("string");
    expect(isFound).toBeTruthy();

    expect(textTree.head.children["s"].val === "s").toBeTruthy();
    expect(textTree.head.children["s"].children["t"].val === "t").toBeTruthy();
    expect(
      textTree.head.children["s"].children["t"].children["r"].val === "r"
    ).toBeTruthy();
    expect(
      textTree.head.children["s"].children["t"].children["r"].children["i"]
        .val === "i"
    ).toBeTruthy();
    expect(
      textTree.head.children["s"].children["t"].children["r"].children["i"]
        .children["n"].val === "n"
    ).toBeTruthy();
    expect(
      textTree.head.children["s"].children["t"].children["r"].children["i"]
        .children["n"].children["g"].val === "g"
    ).toBeTruthy();
  });

  test("add second word similar to first", () => {
    textTree.addWord("stir");
    textTree.addWord("string");

    const isStringFound = textTree.findWord("string");
    const isStirFound = textTree.findWord("stir");

    expect(isStringFound).toBeTruthy();
    expect(isStirFound).toBeTruthy();
  });

  test("getCombos for s, should return both words", () => {
    const combos = textTree.getCombos("s");

    expect(["string", "stir"]).toEqual(expect.arrayContaining(combos));
  });

  test("getCombos for s with specific amount", () => {
    textTree.addWord("stir");
    textTree.addWord("string");
    textTree.addWord("sing");
    textTree.addWord("sir");
    textTree.addWord("sam");

    const combos = textTree.getCombos("s", 2);

    expect(["string", "stir", "sing", "sir", "sam"]).toEqual(
      expect.arrayContaining(combos)
    );
    expect(combos.length).toEqual(2);
  });

  test("remove word", () => {
    textTree.addWord("stir");
    textTree.addWord("string");
    textTree.removeWord("stir");
    const isStirFound = textTree.findWord("stir");

    expect(isStirFound).toBeFalsy();

    expect(
      textTree.head.children["s"].children["t"].children["i"] === undefined
    ).toBeTruthy();
  });
});
