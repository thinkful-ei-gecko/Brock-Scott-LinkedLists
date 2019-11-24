const listHelpers = {
  display(linkedList) {
    let currNode = linkedList.head;
    let currPos = 1;
    while (currNode !== null) {
      console.log("pos:" + currPos);
      console.log("value:" + currNode.value);
      console.log(
        "next:" + (currNode.next !== null ? currNode.next.value : null)
      );
      currNode = currNode.next;
      currPos += 1;
    }
  },
  size(linkedList) {
    if (!linkedList.head) {
      return "no values in the list";
    }

    let currNode = linkedList.head.next;
    let currPos = 0;

    while (currNode !== null) {
      currNode = currNode.next;
      currPos += 1;
    }
    return currPos;
  },
  isEmpty(linkedList) {
    return !linkedList.head;
  },
  findPrev(linkedList, item) {
    let currNode = linkedList.head;
    let prevNode = linkedList.head;

    if (!linkedList.head) {
      return null;
    }

    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        prevNode = currNode;
        currNode = currNode.next;
      }
    }
    return prevNode;
  },
  findLast(linkedList) {
    let currNode = linkedList.head;

    if (!linkedList.head) {
      return null;
    }
    while (!currNode.value || currNode.next) {
      currNode = currNode.next;
    }
    return currNode;
  },
  removeDuplicates(linkedList) {
    let current = linkedList.head;
    while (current !== null) {
      let newNode = current;
      while (newNode.next !== null) {
        if (newNode.next.value === current.value) {
          newNode.next = newNode.next.next;
        } else {
          newNode = newNode.next;
        }
      }
      current = current.next;
    }
  },
  reverseList(linkedList) {
    let currNode = linkedList.head;
    let prevNode = null;
    let nextNode = linkedList.head.next;

    while (currNode !== null) {
      nextNode = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = nextNode;

      if (nextNode === null) {
        linkedList.head = prevNode;
      }
    }
    return linkedList;
  },
  thirdFromLast(linkedList) {
    let currNode = linkedList.head;

    while (currNode !== null) {
      if (currNode.next.next.next === null) {
        return currNode;
      }
      currNode = currNode.next;
    }
  },
  middleOfList(linkedList) {
    let sizer = this.size(linkedList);
    let middle = Math.floor(sizer / 2);
    let count = 1;
    let currNode = linkedList.head;

    while (count < middle) {
      currNode = currNode.next;
      count +=1;
    }
    return currNode;
  },
  cycleList(linkedList){
    let slowNode = linkedList.head;
    let fastNode = linkedList.head;

    while (fastNode.next !== null && fastNode.next.next !== null){
      slowNode = slowNode.next;
      fastNode = fastNode.next.next;
      if(slowNode.value === fastNode.value){
        console.log('this list has a cycle')
        return true;
      }
    }
    console.log('this list has no cycle')
    return false;

  }
};

module.exports = listHelpers;
