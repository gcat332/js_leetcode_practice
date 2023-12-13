// You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].
// Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:
// 0 <= j <= nums[i] and
// i + j < n
// Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Example 2:
// Input: nums = [2,3,0,1,4]
// Output: 2

const nums = [7,0,9,6,9,6,1,7,9,0,1,2,9,0,3]

function canJump(nums) {
    // Find possible maximum jump of each i
    for(var i = 1; i < nums.length; i++)
      {
        nums[i] = Math.max(nums[i] + i, nums[i-1]);
      }
    // Find step by maximun jump array  
      var cur_step = 0
      var ans = 0
      while (cur_step < nums.length-1){
        ans++
        cur_step = nums[cur_step]
      }
    return ans
}

console.log(canJump(nums));


