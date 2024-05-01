console.log("Hello, World!");
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

let p = Point(23, 42);

new Vue({
  data: {
    myProperty: 42
  },
  created: () => {
    // BAD: prints: "myProperty is: undefined"
    console.log('myProperty is: ' + this.myProperty);
  }
});

new Vue({
  data: {
    myProperty: 42
  },
  created: function () {
    // GOOD: prints: "myProperty is: 1"
    console.log('myProperty is: ' + this.myProperty);
  }
});
