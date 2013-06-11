
/*!
 * permutations
 *
 * generate unique permutations, like all lottery numbers
 *
 * MIT
 */

/**
 * Exports.
 */

module.exports = permutations;

/**
 * Factory a permutations function
 * of length `len` out of maximum `max`.
 *
 * @param {Number} len
 * @param {Number} max
 * @return {Function}
 * @api public
 */

function permutations(len, max) {
  var cur = range(1, len);
  var down, up;

  // generate next permutation.
  // returns `false` when it reaches last.
  function next() {
    for (down=len; --down;) {
      if (cur[down]>max-(len-down)+1) {
        cur[down-1]++;
        for (up=down; up<len; up++) {
          cur[up] = cur[up-1]+1
        }
      }
      else break;
    }

    // ended
    if (max == cur[len-2]) return false;

    var copy = cur.slice();

    cur[len-1]++;

    return copy;
  };

  next.len = len;
  next.max = max;
  next.cur = cur;

  return next;
}

/**
 * Create a simple range from `a` to `b`.
 *
 * @param {Number} a
 * @param {Number} b
 * @return {Array}
 * @api private
 */

function range(a, b) {
  var arr = [];
  for (var i=a; i<=b; i++) {
    arr.push(i);
  }
  return arr;
}
