// Q2.js

function applyOperation(numbers, operation) {
    const result = [];
    for (let num of numbers) {
        result.push(operation(num));
    }
    return result;
}

const nums = [1, 2, 3, 4];

const doubled = applyOperation(nums, n => n * 2);
const squared = applyOperation(nums, n => n * 2);

console.log("Doubled:", doubled); 
console.log("Squared:", squared);
