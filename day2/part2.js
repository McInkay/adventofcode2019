const fs = require("fs");
const intCode = require("./intCode");

fs.readFile("./data.txt", "utf8", (err, data) => {
	if (err) {
		console.log("Error in file");
		process.exit(1);
	}
	const ints = data.split(",").map((int) => Number(int));
	for(let i = 0; i < 100; i++) {
		for (let j = 0; j < 100; j++) {
			const args = ints.slice(0);
			args[1] = i;
			args[2] = j;
			let [result] = intCode(args);
			if (result === 19690720) {
				console.log("i: " + i);
				console.log("j: " + j);
				process.exit();
			}
		}
	}
});
