/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
	let arr = []
	for (let i of nums1) {
		if (nums2.includes(i)) {
			arr.push(i)
			nums2 = nums2.filter((el) => el !== i)
		}
	}
	return arr
}
// @lc code=end
