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

  BFS() {
    let data = [];
    let queue = [];

    let node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  DFSPreOrder() {
    // 1. 방문한 노드를 저장할 변수 생성(변수이름 data)
    let data = [];
    // 2. 'current'라는 변수를 만들고 루트를 저장
    let current = this.root;
    // 3. node라는 인자를 받는 helper함수를 만든다.
    function traverse(node) {
      // 4. data에 node를 넣는다.
      data.push(node);
      // 5. left프로퍼티가 있나 확인하고, 있다면 헬퍼 함수를 left프로퍼티에 대해 호출
      if (node.left) traverse(node.left);
      // 6. right프로퍼티가 있나 확인하고, 있다면 헬퍼 함수를 right프로퍼티에 대해 호출
      if (node.right) traverse(node.right);
    }
    // 7. 헬퍼함수를 호출
    traverse(current);
    return data;
  }

  DFSPostOrder() {
    // 1. 방문한 노드를 저장할 변수 생성(변수이름 data)
    let data = [];
    // 2. 'current'라는 변수를 만들고 루트를 저장
    let current = this.root;
    // 3. node라는 인자를 받는 helper함수를 만든다.
    function traverse(node) {
      // 4. left프로퍼티가 있나 확인하고, 있다면 헬퍼 함수를 left프로퍼티에 대해 호출
      if (node.left) traverse(node.left);
      // 5. right프로퍼티가 있나 확인하고, 있다면 헬퍼 함수를 right프로퍼티에 대해 호출
      if (node.right) traverse(node.right);
      // 6. data에 node를 넣는다.
      data.push(node.value);
    }
    // 7. 헬퍼함수를 호출
    traverse(current);
    //8. 변수 리턴
    return data;
  }

  DFSInOrder() {
    // 1. 방문한 노드를 저장할 변수 생성(변수이름 data)
    let data = [];
    // 2. 'current'라는 변수를 만들고 루트를 저장
    let current = this.root;
    // 3. node라는 인자를 받는 helper함수를 만든다.
    function traverse(node) {
      // 4. left프로퍼티가 있나 확인하고, 있다면 헬퍼 함수를 left프로퍼티에 대해 호출
      if (node.left) traverse(node.left);
      // 5. data에 node를 넣는다.
      data.push(node.value);
      // 6. right프로퍼티가 있나 확인하고, 있다면 헬퍼 함수를 right프로퍼티에 대해 호출
      if (node.right) traverse(node.right);
    }
    // 7. 헬퍼함수를 호출
    traverse(current);
    //8. 변수 리턴
    return data;
  }
}
//       10
//   6        15
// 3   8         20

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(8);
tree.insert(3);
tree.insert(20);

console.log(tree.DFSInOrder());
