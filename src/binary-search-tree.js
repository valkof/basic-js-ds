const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor () {
    this.knot = null;
  }

  root() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.knot;
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.knot = addWhithin(this.knot, data);

    function addWhithin(node, data) {
      if (!node) {
        return new Node(data);
      }
      
      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWhithin(node.left, data);
      } else {
        node.right = addWhithin(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return hasWhithin(this.knot, data);

    function hasWhithin(node, data) {
      if (!node) {
        return false;
      }
      
      if (data === node.data) {
        return true;
      } else if (data < node.data) {
        return hasWhithin(node.left, data);
      } else {
        return hasWhithin(node.right, data);
      }
    }
  }

  find(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return findWhithin(this.knot, data);

    function findWhithin(node, data) {
      if (!node) {
        return null;
      }
      
      if (data === node.data) {
        return node;
      } else if (data < node.data) {
        return findWhithin(node.left, data);
      } else {
        return findWhithin(node.right, data);
      }
    }
  }

  remove(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.knot = removeWhithin(this.knot, data);

    function removeWhithin(node, data) {
      if (!node) {
        return null;
      }
      
      if (node.data === data) {
        if (!node.left && !node.right) return null;
        if (!node.left) return node.right;
        if (!node.right) return node.left;
        
        let minNode = node.right;
        while (minNode.left) {
          minNode = minNode.left;
        }
        minNode.left = node.left;
        return node.right;
      }

      if (data < node.data) {
        node.left = removeWhithin(node.left, data);
      } else {
        node.right = removeWhithin(node.right, data);
      }

      return node;
    }
  }

  min() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let minNode = this.knot;
    while (minNode.left) {
      minNode = minNode.left;
    };
    return minNode.data;
  }

  max() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let maxNode = this.knot;
    while (maxNode.right) {
      maxNode = maxNode.right;
    };
    return maxNode.data;
  }
}

module.exports = {
  BinarySearchTree
};