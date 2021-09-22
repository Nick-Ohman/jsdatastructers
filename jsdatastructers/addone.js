function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++){
        total +=i;
    }
    return total
}

console.log(addUpTo(2))

/* solution 2*/
function addUpTo2(n) {
    return n * (n + 1) / 2;
}
console.log(addUpTo2(6))



var time1 = performance.now();
addUpTo(1000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)

var time1 = performance.now();
addUpTo2(1000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)