const fs = require("fs");

fs.readFile("./data.txt", "utf8", (err, data) => {
        if (err) {
                console.log("Error in file");
                process.exit(1);
        }
        const ints = data.split(",").map((int) => Number(int));
        runIntCode(ints);
});


const runIntCode = (ints) => {
	let shouldExit = false;
	let index = 0;
	while (!shouldExit) {
		const commandInt = ints[index];
		const command = commands[commandInt];
		let result;
		if (command) {
			command(ints, index);
			index += 4;
		} else {
			error();
		}
	}
};

const add = (ints, index) => {
	const start = ints[++index];
	const end = ints[++index];
	const position = ints[++index];
	ints[position] = ints[start] + ints[end];
};

const multiply = (ints, index) => {
        const start = ints[++index];
        const end = ints[++index];
	const position = ints[++index];
	ints[position] = ints[start] * ints[end];
};

const exit = (ints, index) => {
	console.log(ints[0]);
	process.exit(0);
};

const error = () => {
	console.log("Error");
	process.exit(1);
}

const commands = {
	1: add,
	2: multiply,
	99: exit,
}
