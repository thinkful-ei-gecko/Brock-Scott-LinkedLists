const _Node = require("./node");
const listHelpers = require("./llHelpers");

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    let tempNode = this.head;

    if (tempNode === null) {
      this.insertFirst(item);
      return;
    }

    while (tempNode.next !== null) {
      tempNode = tempNode.next;
    }

    tempNode.next = new _Node(item, null);
  }

  find(item) {
    // start at the head of the linked list
    let currNode = this.head;

    //if the list is empty
    if (!this.head) {
      return null;
    }

    // check for the item
    while (currNode.value !== item) {
      // returns null if its the end of the list and the item is not on the list
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item) {
    //if the list is empty
    if (!this.head) {
      return null;
    }

    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    let currentNode = this.head;

    let prevNode = this.head;

    while (currentNode !== null && currentNode.value !== item) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    if (currentNode === null) {
      console.log("Item not found");
      return;
    }
    prevNode.next = currentNode.next;
  }

  insertBefore(item, itemBefore) {
    if (!this.head) {
      this.insertLast(item);
    }

    let currentNode = this.head;
    let prevNode = this.head;

    while (currentNode !== null && currentNode.value !== itemBefore) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    if (currentNode === null) {
      this.insertLast(item);
      return;
    }
    // make new node - set pointer to currnode
    prevNode.next = new _Node(item, currentNode);
    // set pointer for prevnode to new node
  }

  createCycle(data) {
    let cyclePoint = this.head.next;
    let tempNode = this.head;
    while (tempNode.next !== null) {
      tempNode = tempNode.next;
    }
    tempNode.next = new Node(data, cyclePoint);
  }

  insertAfter(item, itemAfter) {
    if (!this.head) {
      this.insertFirst(item);
    }

    let currNode = this.head;
    let currNodePlusOne = currNode.next;

    while (currNode !== null && currNode.value !== itemAfter) {
      currNode = currNode.next;
      currNodePlusOne = currNode.next;
    }
    if (currNode === null) {
      this.insertLast(item);
      return;
    }
    // make new node - set pointer to currnode
    currNode.next = new _Node(item, currNodePlusOne);
  }

  insertAt(item, pos) {
    if (!this.head) {
      this.insertFirst(item);
    }
    if (pos <= 1) {
      this.head = new _Node(item, this.head);
    }

    let currNode = this.head;
    let prevNode = this.head;
    let currPos = 1;

    while (currPos < pos && currNode !== null) {
      prevNode = currNode;
      currNode = currNode.next;
      currPos += 1;
    }
    prevNode.next = new _Node(item, currNode);
  }
}

function main() {
  let SLL = new LinkedList();
  SLL.insertLast("Apollo");
  SLL.insertLast("Boomer");
  SLL.insertLast("Helo");
  SLL.insertLast("Husker");
  SLL.insertLast("Bust");
  SLL.insertLast("Starbuck");
  SLL.insertLast("Tauhida");
  SLL.insertBefore("Athena", "Boomer");
  SLL.insertAfter("Hotdog", "Helo");
  SLL.insertAt("Kat", 3);
  SLL.remove("Tauhida");

  //console.log(SLL.find('Tauhida'));
  //console.log(JSON.stringify(SLL));

  console.log(listHelpers.cycleList(SLL));
  //listHelpers.display(SLL);
}
main();

// * Linked list interview question

// you would loop thru the list to find the value of the inserted item to put it in its right place,
// set values to the items,
// then insert the value into the sorted list,
// print new sorted list

// input c-d-e-m-n
// output c-d-e-f-m-n

/* 
-start at the head which is C
- have tempnodes like currVal and prevVal
- check the value of the item to see if the value of the item we want to insert is less than the item on the list
- create a new node
- set the new nodes next ptr to current
- set previous next ptr to the new node

*/

/* function insertInSortedList(sortedList, item){
  if(item > sortedList.head.value){
    sortedList .head = new _Node(item, sortedList.head);
  }
  let previous = sortedList.head;
  let current = sortedList.head;

  while(current !== null) {
    if(current.value > item){
      previous.next = new _Node(item, current);
    }
    previous = current;
    current = current.next;
  }
  previous.next = new _Node(item, null);
} */
