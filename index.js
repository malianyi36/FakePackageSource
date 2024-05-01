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

var https = require('https'),
    url = require('url');

var server = https.createServer(function(){});

server.on('request', function(req, res) {
    let origin = url.parse(req.url, true).query.origin;
     // BAD: attacker can choose the value of origin
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Credentials", true);

    // ...
});
