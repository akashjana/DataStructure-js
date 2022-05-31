
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor(value){
    this.head = {
      value : value,
      next : null
    };
    this.tail = this.head;
    this.length = 1;
  }
  
  printList(){
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    array.push(currentNode);
    return array.join("=>");
  }
  
  append(value){
    const newNode = new Node(value);
    // const newNode = {
    //   value : value,
    //   next : null
    // };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  
  prepend(value){
    const newNode = new Node(value);
    // const newNode = {
    //   value : value,
    //   next : null
    // };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  
  remove(index){
    if (index === 0) {
      this.head = this.head.next;
      return this;
    }
    if (index >= this.length) {
      return this;
    }
    const leader = this.traverseToIndex(index-1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this;
  }
  
  insert(index,value){
    if (index === 0) {
      return this.prepend(value);
    }
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index-1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this;
  }
  
  traverseToIndex(index){
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

let linkedList = new LinkedList(5);
linkedList.prepend(0);
linkedList.append(1);
linkedList.append(6);
linkedList.insert(4,21);
console.log(linkedList.printList());
linkedList.remove(40)
console.log(linkedList.printList());