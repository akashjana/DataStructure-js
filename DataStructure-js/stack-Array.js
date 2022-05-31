
class Stack{
  constructor(value){
    this.array = [];
  }
  
  peek(){
    return this.array[this.array.length-1];
  }
  
  push(value){
    this.array.push(value);
  }
  
  pop(){
    this.array.pop();
    return this;
  }
  
}

let stack = new Stack();
console.log(stack.peek());
stack.push("google");
stack.push("youtube");
stack.push("twitter");
console.log(stack);
console.log(stack.peek());
stack.pop();
console.log(stack.peek());
stack.pop();
console.log(stack.peek());
stack.pop();
console.log(stack.peek());

