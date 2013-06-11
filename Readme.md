
# permutations

generate unique permutations, like all lottery numbers

## Example

```
var permutations = require('permutations');

var perm = permutations(4,10);

var p;
while (p = perm()) {
  console.log(p); // [1,2,3,4] [1,2,3,5] ... [7,8,9,10]
}
```

## License

MIT
