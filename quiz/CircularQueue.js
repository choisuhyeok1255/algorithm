class CircularQueue {
  constructor(capacity) {
      this.capacity = capacity;
      this.front = 0;
      this.rear = 0;
      this.array = new Array(capacity);
  }

  put(value) {
      this.array[this.rear++] = value;
      console.log(this.array);
  }

  get() {
      
  }

  peek() {
      
  }

  print() {

  }
}

const queue = new CircularQueue(10);

queue.put(3);