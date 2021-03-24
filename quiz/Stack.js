class Stack {
  constructor(capacity) {
      this.capacity = capacity
      this.top = 0;
      this.array = new Array(capacity);
  }

  push(value) {
    let temp = 0;

    for(let i = 0; i < this.array.length; i++){
      if(this.array[i] === undefined) {
        temp = i;
        break;
      } 
    }

    this.array[temp] = value;

    console.log(this.array);
  }

  pop() {
    for(let j = this.array.legnth - 1; j > -1; j--){
      if(this.array[j] !== null){
        this.array[j] = null;
        break;
      }
    }
    console.log(this.array);
  }

  peek() {

  }

  isEmpty() {

  }
}

const temp = new Stack(10);

temp.push(1);
temp.push(2);

let a = 1
console.log('a = ' + a++);
console.log(a);
// console.log(a);

