// Given an array of non-negative integers, you are initially positioned at the first index of the array. Each element in the array represents your maximum jump length at that position. Determine if you are able to reach the last index.

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

var zeroChecker = (nums, zero) => {
  for (let i = zero - 1; i >= 0; i--) {
    if (nums[i] > zero - i) {
      return i;
    }
  }
}

var canJump = function(nums) {
  if (nums.length <= 1) {
      return true;
  }
  for (let index = nums.length - 2; index >= 0; index--) {
    if (nums[index] === 0) {
      newIndex = zeroChecker(nums, index);
      if (newIndex !== undefined) {
        index = newIndex;
      } else {
        return false
      }
    }
  }
  return true;
};