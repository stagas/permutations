
/**
 * Test.
 */

function assert(expr) { if (!expr) throw new Error('failed'); }

var permutations = require('../');

var perm = permutations(3,4);

assert(perm().join(',')=='1,2,3');
assert(perm().join(',')=='1,2,4');
assert(perm().join(',')=='1,3,4');
assert(perm().join(',')=='2,3,4');
assert(perm()===false);

var perm = permutations(3,3);
assert(perm().join(',')=='1,2,3');
assert(perm()===false);

console.log('ok');
