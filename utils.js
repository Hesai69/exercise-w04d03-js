
/***** EXAMPLE *****

function parse(str) {
  var keysAndValues = str.split('\n');
  var keys = keysAndValues[0].split(',');
  var values = keysAndValues[1].split(',');
  var obj = {};

  for (var i=0; i< keys.length; i++) {
    var key = keys[i];
    var value = values[i];
    obj[key] = value;
  }
  return obj;
}

module.exports = {
  parse: parse
}

***************/

var str = '/pets?cute=true&big=false';
/* {
  path: '/board',
  query: {
    row: 'a',
    col: 'b'
  }
} */

function parseURL(str) {
  var queryObj = {};
  var obj = {};
  var pathAndQuery = str.split('?');
  var path = pathAndQuery[0];
  var queryKeysValues = pathAndQuery[1].split('&');
  var fragment;


  queryKeysValues.forEach(function(keyValPair) {
    var key = keyValPair.split('=')[0];
    var value = keyValPair.split('=')[1];
    queryObj[key] = value;
  });
  obj.path = path;
  obj.query = queryObj;

  console.log(obj);
}

function toURL() {

}

module.exports = {
  parseURL: parseURL,
  toURL: toURL
};

parseURL(str);
