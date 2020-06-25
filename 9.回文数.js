/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
	let str = String(x)
	let length = str.length
	let str1, str2, mid
	if (length % 2 == 0) {
		mid = length / 2 - 1
		str1 = str.slice(0, mid + 1)
		str2 = str
			.slice(mid + 1, length)
			.split('')
			.reverse()
			.join('')
	} else {
		mid = length / 2 - 0.5
		str1 = str.slice(0, mid)
		str2 = str
			.slice(mid + 1, length)
			.split('')
			.reverse()
			.join('')
	}
	return str1 == str2
}
// @lc code=end
