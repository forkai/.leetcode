/*
 * @lc app=leetcode.cn id=1480 lang=javascript
 *
 * [1480] 一维数组的动态和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
	let arr = []
	nums.reduce((pre, cur) => {
		let r = pre + cur
		arr.push(r)
		return r
	}, 0)
	return arr
}
// @lc code=end
