/*
 * @lc app=leetcode.cn id=771 lang=javascript
 *
 * [771] 宝石与石头
 */

// @lc code=start
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
	let arri = [],
		arrj = []
	let sum = 0
	for (let i = 0; i < J.length; i++) {
		arri[i] = J[i]
	}
	for (let j = 0; j < S.length; j++) {
		arrj[j] = S[j]
	}
	for (let i = 0; i < J.length; i++) {
		for (let j = i; j < S.length; j++) {
			if (arri[i] == arrj[j]) {
				sum = sum + 1
			}
		}
	}
	console.log(sum)
	return sum
}
// @lc code=end
