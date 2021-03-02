import LinkListNode from './linkListNode';

export default class LinkList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    const node = new LinkListNode(value);
    node.next = this.head;
    this.head = node;
  }

  append(value) {
    const node = new LinkListNode(value);
    if (this.head === null) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
  }

  delete(value) {
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode) {
      if (currentNode.value === value) {
        previousNode.next = currentNode.next;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  traverse() {
    let currentNode = this.head;
    while (currentNode) {
      currentNode = currentNode.next;
    }
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  length() {
    let count = 0;
    let currentNode = this.head;
    while (currentNode) {
      count += 1;
      currentNode = currentNode.next;
    }
    return count;
  }
}
