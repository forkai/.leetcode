/*
 * @lc app=leetcode.cn id=1342 lang=javascript
 *
 * [1342] 将数字变成 0 的操作次数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
	let i = 0
	const judge = (num) => {
		i += 1
		if (num == 0) {
			return i - 1
		} else if (num % 2 == 0) {
			num = num / 2
		} else {
			num -= 1
		}
		return judge(num)
	}
	return judge(num)
}
// @lc code=end
