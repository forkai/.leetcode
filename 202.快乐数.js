/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
	let computed = (n) => {
		let str = String(n)
		let result = str
			.split('')
			.map((el) => Number(el))
			.map((el) => el ** 2)
			.reduce((prev, curr) => prev + curr)
		if (result !== 1) {
			return computed(result)
		} else {
			return true
		}
	}
	try {
		return computed(n)
	} catch {
		return false
	}
}

// @lc code=end
