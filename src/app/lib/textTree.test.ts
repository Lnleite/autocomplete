import { TextTree } from "./textTree.js";

describe("Text tree tests", () => {
  const textTree = new TextTree();

  test("add", () => {
    textTree.addWord("string");

    expect(textTree.findWord("string")).toBeTruthy();
  });
});

/*

const trie = new TextTree();

trie.add("string");
// console.log(trie.head.children["s"]?.children["t"]);

trie.add("stir");
trie.add("art");

// console.log(trie.head);
// console.log(trie.head.children["a"]?.val === "a");
// console.log(trie.head.children["a"]?.children["r"]?.val === "r");
// console.log(trie.head.children["a"]?.children["r"]?.children["t"]?.val === "t");

// console.log(trie.head.children["s"]?.children["t"]);

// console.log(trie.head.children["s"]?.val === "s");
// console.log(trie.head.children["s"]?.children["t"]?.val === "t");
// console.log(trie.head.children["s"]?.children["t"]?.children["r"]?.val === "r");
// console.log(trie.head.children["s"]?.children["t"]?.children["i"]?.val === "i");

console.log(trie.getCombos("s"));

console.log(trie.removeWord("art"));
console.log(trie.removeWord("stir"));
console.log(trie.getCombos("s"));

let stack = [];
stack.push(trie.head);
while (stack.length > 0) {
  let node = stack.pop();
  console.log(node);

  if (Object.keys(node.children).length > 0) {
    for (let key in node.children) {
      stack.push(node.children[key]);
    }
  }
}
*/
