class TextTreeNode {
  val: string;
  children: Record<string, TextTreeNode> = {};

  constructor(val: string) {
    this.val = val;
    this.children = {};
  }
}

export class TextTree {
  head: TextTreeNode;

  constructor() {
    this.head = new TextTreeNode("");
  }

  addWord(value: string) {
    let currNode = this.head;
    let valIndex = 0;

    while (true) {
      let nextNode = currNode.children[value[valIndex]];

      if (nextNode == undefined) {
        break;
      } else {
        currNode = nextNode;
        valIndex++;
      }
    }

    while (valIndex < value.length) {
      let char = value[valIndex];

      currNode.children[char] = new TextTreeNode(char);

      currNode = currNode.children[char];
      valIndex++;
    }
  }

  getCombos(value: string, amount = Infinity) {
    const wordCombos = [];
    let valIndex = 0;

    let currNode = this.head;
    while (valIndex < value.length) {
      let nextNode = currNode.children[value[valIndex]];

      if (nextNode == undefined) {
        break;
      } else {
        currNode = nextNode;
      }
    }

    if (Object.keys(currNode.children).length === 0) {
      return [];
    }

    let stack: [TextTreeNode, string][] = [];
    for (let key in currNode.children) {
      stack.push([currNode.children[key], ""]);
    }

    while (stack.length > 0) {
      let [node, str]: [TextTreeNode, string] = stack.pop()!;

      str += node.val;
      if (Object.keys(node.children).length > 0) {
        for (let key in node.children) {
          stack.push([node.children[key], str]);
        }
      } else {
        wordCombos.push(value + str);
        if (wordCombos.length >= amount) {
          return wordCombos;
        }
      }
    }
    return wordCombos;
  }

  removeWord(value: string) {
    const previousNodes: TextTreeNode[] = [];
    previousNodes.push(this.head);
    let valIndex = 0;

    while (previousNodes.length <= value.length) {
      let node =
        previousNodes[previousNodes.length - 1].children[value[valIndex]];
      if (node) {
        previousNodes.push(node);
        valIndex++;
      } else {
        return "Error: Word does not exist";
      }
    }

    let previousNode = previousNodes.pop();
    while (previousNodes.length > 0) {
      let node = previousNodes.pop();
      if (
        node &&
        previousNode &&
        node.children[previousNode.val] &&
        Object.keys(node.children[previousNode.val].children).length === 0
      ) {
        delete node.children[previousNode.val];
        previousNode = node;
      }
    }

    return "Word removed";
  }

  findWord(value: string) {
    let valIndex = 0;

    let currNode = this.head;
    while (valIndex < value.length) {
      let nextNode = currNode.children[value[valIndex]];

      if (nextNode == undefined) {
        break;
      } else {
        currNode = nextNode;
        valIndex++;
      }
    }

    if (valIndex === value.length) return true;

    return false;
  }
}
