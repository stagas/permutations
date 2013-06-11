
/**
 * Example.
 */

var permutations = require('./');

var perm = permutations(4,10);

var p;
while (p = perm()) {
  console.log(p);
}
