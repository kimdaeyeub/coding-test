class Tree {
  constructor() {
    this.root = null;
  }

  generateTree(node) {
    const newNode = new Node(node);
    if (!this.root) return (this.root = newNode);
    let current = this.root;
    while (true) {
      if (current.value[0] > newNode.value[0]) {
        if (!current.left) return (current.left = newNode);
        current = current.left;
      } else {
        if (!current.right) return (current.right = newNode);
        current = current.right;
      }
    }
  }

  postorder() {
    let data = [];
    let current = this.root;

    function helper(node) {
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
      data.push(node.value[2]);
    }

    helper(current);
    return data;
  }

  preorder() {
    let data = [];
    let current = this.root;

    function helper(node) {
      data.push(node.value[2]);
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
    }

    helper(current);
    return data;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function solution(nodeinfo) {
  var answer = [];
  for (let i = 0; i < nodeinfo.length; i++) {
    nodeinfo[i].push(i + 1);
  }

  nodeinfo = nodeinfo.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return b[1] - a[1];
    }
  });

  const tree = new Tree();
  for (let x of nodeinfo) {
    tree.generateTree(x);
  }

  const preorder = tree.preorder();
  const postorder = tree.postorder();

  answer.push(preorder, postorder);

  return answer;
}

console.log(
  solution([
    [5, 3],
    [11, 5],
    [13, 3],
    [3, 5],
    [6, 1],
    [1, 3],
    [8, 6],
    [7, 2],
    [2, 2],
  ])
);
//[[7, 4, 6, 9, 1, 8, 5, 2, 3], [9, 6, 5, 8, 1, 4, 3, 2, 7]];
