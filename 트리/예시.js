class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    // 1. 루트가 비었는지 확인
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let currentValue = this.root;
      while (true) {
        // 이미 존재하는 값이 들어올 경우 무한루프에 빠지는 것을 방지하기 위해
        // 값이외에 카운트를 추가하여 카운트를 키우는 방법도 존재
        if (value === currentValue.value) return undefined;
        // 2.부모 트리보다 작을 경우
        if (currentValue.value > value) {
          // 부모 노드보다 작지만 왼쪽 값이 비어있는 경우
          if (currentValue.left === null) {
            currentValue.left = newNode;
            return this;
          } else {
            // 부모 노드보다 작지만 왼쪽값이 존재하면 부모노드에 왼쪽 값을 할당하야 탐색을 지속
            currentValue = currentValue.left;
          }
        } else {
          // 부모노드보다 큰 경우

          // 부모노드보다 크지만 오른쪽 값이 빈경우
          if (currentValue.right === null) {
            currentValue.right = newNode;
            return this;
          } else {
            // 부모노드보다 크지만 오른쪽 값이 존재하여 부모노드에 오른쪽 값을 할당하여 탐색 지속
            currentValue = currentValue.right;
          }
        }
      }
    }
  }

  // value가 있다면 true, 없다면 false를 리턴
  find(value) {
    if (this.root === null) {
      return false;
    } else {
      let current = this.root;
      while (true) {
        // current보다 작을 경우
        if (current.value === value) return current;
        if (current.value > value) {
          if (current.left === null) return false;
          current = current.left;
        } else {
          if (current.right === null) return false;
          current = current.right;
        }
      }
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(7);
tree.insert(15);
tree.insert(9);
//       10
//   7        15
//     9

console.log(tree);
console.log(tree.find(10)); //true
console.log(tree.find(11)); // false
console.log(tree.find(16)); //false
console.log(tree.find(8)); // false
console.log(tree.find(7)); // true
console.log(tree.find(15)); // true
console.log(tree.find(9)); // true
