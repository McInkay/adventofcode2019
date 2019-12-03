const intCode = require("./intCode");

module.exports = (data) => {
	const ints = data.split(",").map((int) => Number(int));
	for(let i = 0; i < 100; i++) {
		for (let j = 0; j < 100; j++) {
			const args = ints.slice(0);
			args[1] = i;
			args[2] = j;
			let [result] = intCode(args);
			if (result === 19690720) {
				return `i: ${i}, j: ${j}`;
			}
		}
	}
}