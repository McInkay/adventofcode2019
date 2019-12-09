const intCode = require("../intcode/");

const permutations = (array) => {
	if (array.length === 0 || array.length === 1) {
		return [array];
	} else {
		const perms = [];
		array.forEach((char, index) => {
			const copy = array.slice(0);
			copy.splice(index, 1);
			const subPerms = permutations(copy);
			subPerms.forEach((perm) => {
				perms.push([char, ...perm]);
			});
		});
		return perms;
	}
}

module.exports = (data) => {
	const ints = data.split(",");
	const perms = permutations([0, 1, 2, 3, 4]);
	const biggest = [0, ""];
	perms.forEach((perm) => {
		let input = 0;
		let sequence = perm;
		for (let i = 0; i < 5; i++) {
			const code = ints.slice(0);
			const inputs = [sequence[i], input || 0];
			const outputs = intCode(code, inputs);
			[input] = outputs;
		}
		console.log(`${input} : ${perm}`);
		if (input >= biggest[0]) {
			biggest[0] = input;
			biggest[1] = perm;
		}
	});
	return biggest[0] + ":" + biggest[1];
}