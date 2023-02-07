class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new currVal into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    var currVal = this.root;
    while (true) {
      if (val < currVal.val) {
        if (currVal.left === null) {
          currVal.left = new Node(val);
          return this;
        } else {
          currVal = currVal.left;
        }
      } else if (val > currVal.val) {
        if (currVal.right === null) {
          currVal.right = new Node(val);
          return this;
        } else {
          currVal = currVal.right;
        }
      }
    }

  }

  /** insertRecursively(val): insert a new currVal into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currVal = this.root) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    if (val < currVal.val) {
      if (currVal.left === null) {
        currVal.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, currVal.left);
    } else {
      if (currVal.right === null) {
        currVal.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, currVal.right);
    }
  }

  /** find(val): search the tree for a currVal with value val.
   * return the currVal, if found; else undefined. Uses iteration. */

  find(val) {
    let currVal = this.root;
    let found = false;

    if (val === currVal.val) {
      return currVal
    }

    while (currVal && !found) {
      if (val < currVal.val) {
        currVal = currVal.left;
      } else if (val > currVal.val) {
        currVal = currVal.right;
      } else {
        found = true;
      }
    }

    if (!found) {
      return undefined
    }

    return currVal;
  }

  /** findRecursively(val): search the tree for a currVal with value val.
   * return the currVal, if found; else undefined. Uses recursion. */

  findRecursively(val, currVal = this.root) {

    if (this.root === null) {
      return undefined;
    }

    if (val < currVal.val) {
      if (currVal.left === null) {
        return undefined;
      } else {
        return this.findRecursively(val, currVal.left);
      }
    } else if (val > currVal.val) {
      if (currVal.right === null) {
        return undefined;
      } else {
        return this.findRecursively(val, currVal.right);
      }
    }
    return currVal;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let arr = [];
    let currVal = this.root;

    function search(currVal) {
      arr.push(currVal.val); 
      if (currVal.left) {
        search(currVal.left)
      } 
      if (currVal.right) {
        search(currVal.right)
      }
    }

    search(currVal);

    return arr;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let arr = [];
    let currVal = this.root;

    function search(currVal) {
      if (currVal.left) {
        search(currVal.left)
      }

      arr.push(currVal.val); 

      if (currVal.right) {
        search(currVal.right)
      }
    }

    search(currVal);
    return arr;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let arr = [];
    let currVal = this.root;

    function search(currVal) {
      if (currVal.left) {
        search(currVal.left);
      }
      if(currVal.right) {
        search(currVal.right);
      }

      arr.push(currVal.val); 
    }

    search(currVal);
    
    return arr;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let currVal = this.root;
    let arr= [];
    let queue = [];

    queue.push(currVal);

    while (queue.length) {
      currVal = queue.shift();
      arr.push(currVal.val);
      if (currVal.left) {
        queue.push(currVal.left);
      }

      if (currVal.right) {
        queue.push(currVal.right);
      }
    }

    return arr;
  }
}

module.exports = BinarySearchTree;
