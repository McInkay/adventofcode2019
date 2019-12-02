
module.exports = (ints) => {
	let shouldExit = false;
	let index = 0;
	while (!shouldExit) {
		const commandInt = ints[index];
		if (commandInt === 99) {
			return ints;
		}
		const command = commands[commandInt];
		let result;
		if (command) {
			index = command(ints, index);
		} else {
			return;
		}
	}
};

const add = (ints, index) => {
	const start = ints[++index];
	const end = ints[++index];
	const position = ints[++index];
	ints[position] = ints[start] + ints[end];
	return index + 1;
};

const multiply = (ints, index) => {
        const start = ints[++index];
        const end = ints[++index];
	const position = ints[++index];
	ints[position] = ints[start] * ints[end];
	return index + 1;
};

const commands = {
	1: add,
	2: multiply,
}
