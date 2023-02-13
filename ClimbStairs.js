function recursion(num) {
  if(num <= 1) {
    return 1;
  }
  return recursion(num-1) + recursion(num-2);
}

var climbStairs = function(n) {
    return recursion(n);
};

console.log(climbStairs(36));