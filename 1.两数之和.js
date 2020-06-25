/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	var arr = [],
		res = []
	for (var i = 0; i < nums.length; i++) {
		if (arr.hasOwnProperty(nums[i])) {
			res[0] = arr[nums[i]]
			res[1] = i
			return res
		}
		arr[target - nums[i]] = i
	}
	return res
}

// let twoSums = (nums, target) => {
// 	for (let i = 0; i < nums.length; i++) {
// 		let j = i + 1
// 		while (j < nums.length) {
// 			j++
// 			if (nums[i] + nums[j] == target) {
// 				let arr = [i, j]
// 				return arr
// 			}
// 		}
// 	}
// }
// @lc code=end
