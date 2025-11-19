// Q7.js

function makeMultiplier(multiplier) {
    return function (number) {
        return number * multiplier; 
    };
}

const triple = makeMultiplier(3);
console.log(triple(5)); // 15

/*  
Explanation:
- The inner function remembers `multiplier` even after makeMultiplier finishes.
- This "remembering" of outer variables is called closure.
*/
