class Node{
  constructor(value){
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null;
  }
  
  insert(value){
    const newNode = new Node(value);
    if(this.root === null){
      this.root = newNode;
    }else{
      let currentNode = this.root;
      while(true){
        if(value < currentNode.value){
          if(!currentNode.left){
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        }else{
          if(!currentNode.right){
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  
  lookup(value){
    if(!this.root){
      return false;
    }
    let currentNode = this.root;
    while(currentNode){
      if(value < currentNode.value){
        currentNode = currentNode.left;
      }else if(value > currentNode.value){
        currentNode = currentNode.right;
      }else if(currentNode.value === value){
        return currentNode;
      }
    }
    return false;
  }
  
  remove(value){
    if(!this.root){
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while(currentNode){
      if(value < currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.left;
      }else if(value > currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.right;
      }else if(value === currentNode.value){
        //We have a match, get to work!
        
        //#1- No right child: 
        if(currentNode.right === null){
          if(parentNode === null){
            this.root = currentNode.left;
          }else{
            //if parent > current value, make current left child a child of parent
            if(currentNode.value < parentNode.value){
              parentNode.left = currentNode.left;
            //if parent < current value, make left child a right child of parent
            }else if(currentNode.value > parentNode.value){
              parentNode.right = currentNode.left;
            }
          }
        //#2- Right child which doesnt have a left child
        }else if(currentNode.right.left === null){
          currentNode.right.left = currentNode.left;
          if(parentNode === null){
            this.root = currentNode.left;
          }else{
            //if parent > current, make right child of the left the parent
            if(currentNode.value < parentNode.value){
              parentNode.left = currentNode.right;
            //if parent < current, make right child a right child of the parent
            }else if(currentNode.value > parentNode.value){
              parentNode.right = currentNode.right;
            }
          }
        // #3- right child that has a left child
        }else{
          //find right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while(leftmost.left !== null){
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }
          //parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;
          
          if(parentNode === null){
            this.root = leftmost;
          }else{
            if(currentNode.value < parentNode.value){
              parentNode.left = leftmost;
            }else if(currentNode.value > parentNode.value){
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
}

function traverse(node){
  const tree = {value: node.value};
  tree.left = node.left === null? null: traverse(node.left);
  tree.right = node.right === null? null: traverse(node.right);
  return tree;
}

const tree = new BinarySearchTree();
tree.insert(2);
tree.insert(6);
tree.insert(1);
tree.insert(34);
tree.insert(12);
tree.insert(0);
tree.insert(7);

console.log(tree.remove(34));
//console.log(tree.remove(1));

console.log(tree.lookup(12));

console.log(JSON.stringify(traverse(tree.root)));