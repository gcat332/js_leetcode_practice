// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
// Return true if you can reach the last index, or false otherwise.

// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Example 2:
// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

const nums = [0]

function canJump(numArray) {
    var max_jmp =0;
    for (var i = 0; i<numArray.length;i++) {
        max_jmp = Math.max(max_jmp,i+numArray[i])
        if (max_jmp >= numArray.length-1) {
            return true
        }
        if (i >= max_jmp) {
            return false
        } 
    }
}

console.log(canJump(nums));


