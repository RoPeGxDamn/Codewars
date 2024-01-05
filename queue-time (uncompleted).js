function queueTime(customers, n) {
    if(customers.length == 0) return 0;
    if(n == 1) {
        return customers.reduce((res, v) => res + v)
    }
    else if(n > 1 && customers.length < n) {
        return Math.max(...customers)
    }
    else if(n > 1) {
        return (customers.reduce((res, v) => res + v)) / n;
    }
}

console.log(queueTime([], 1))

// assert.strictEqual(queueTime([], 1), 0);
//     assert.strictEqual(queueTime([1,2,3,4], 1), 10);
//     assert.strictEqual(queueTime([2,2,3,3,4,4], 2), 9);
//     assert.strictEqual(queueTime([1,2,3,4,5], 100), 5);

