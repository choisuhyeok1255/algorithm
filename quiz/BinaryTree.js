class BinaryTree {
  constructor(array) {
    this.array = array;
  }

  preorder() {
    let s = '';
    const array = this.array;
    
    function recursive(index) {
      if (array.length <= index ) return;

      const value = array[index]; // node
      s += `${value}`
      recursive(2 * index + 1); // left
      recursive(2 * index + 2); // right
    }

    recursive(0)
  }

  inorder() {
    let s = '';
    const array = this.array;
    
    function recursive(index) {
      if (array.length <= index ) return;

      recursive(2 * index + 1); // left

      const value = array[index]; // node
      s += `${value}`

      recursive(2 * index + 2); // right
    }

    recursive(0)
  }

  postorder() {
    let s = '';
    const array = this.array;
    
    function recursive(index) {
      if (array.length <= index ) return;

      recursive(2 * index + 1); // left
      recursive(2 * index + 2); // right
      const value = array[index]; // node
      s += `${value}`;
    }

    recursive(0)
  }

  bfs(targetValue) {
    for (let i = 0; i < this.array.length; i++){
      if (this.array[i] === targetValue){
        return true;
      }
    }
    return false;
  }

  dfs(targetValue) {
    let s = '';
    let isFound = false;
    const array = this.array;
    
    function recursive(index) {
      if (array.length <= index ) return;

      if (isFound === true) return;

      const value = array[index] // node
      if (value === targetValue) {
        isFound =true;
        return;
      } 

      recursive(2 * index + 1); // left
      recursive(2 * index + 2); // right
    }

    recursive(0)
    return isFound;
  }

}

const a = new BinaryTree([1,2,3,4,5,6,7,8,9,10]);
