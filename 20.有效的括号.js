/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	const bracket = {
		')': '(',
		'}': '{',
		']': '[',
	}
	const lBracket = ['{', '[', '(']
	let temp = []
	for (let i of s) {
		if (lBracket.includes(i)) {
			temp.push(i)
		} else {
			if (temp[temp.length - 1] == bracket[i]) {
				temp.pop()
			} else {
				return false
			}
		}
	}
	return temp.length == 0
}
// @lc code=end
