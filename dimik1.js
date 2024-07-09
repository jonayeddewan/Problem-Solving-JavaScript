// Read input from standard input
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// Get number of test cases
const T = parseInt(input[0]);

// Iterate through each test case
for (let i = 1; i <= T; i++) {
    const N = parseInt(input[i]);
    if (N % 2 === 0) {
        console.log('even');
    } else {
        console.log('odd');
    }
}