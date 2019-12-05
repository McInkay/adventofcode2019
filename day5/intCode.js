
module.exports = (ints, inputs) => {
	const outputs = [];
	let shouldExit = false;
	let index = 0;
	while (!shouldExit) {
		const commandInt = ints[index];
		if (commandInt === "99") {
			return outputs;
		}
		const command = getCommand(String(commandInt));
		if (command.command) {
			index = command.command(ints, inputs, outputs, command.paramModes, index);
		} else {
			return;
		}
	}
};

const add = (ints, _, __, paramModes, index) => {
	const start = Number(ints[++index]);
	const end = Number(ints[++index]);
	const position = Number(ints[++index]);
	const param1 = paramModes[0] === 0 ? Number(ints[start]) : start;
	const param2 = paramModes[1] === 0 ? Number(ints[end]) : end;
	ints[position] = Number(param1) + Number(param2);
	return index + 1;
};

const multiply = (ints, _, __, paramModes, index) => {
	const start = Number(ints[++index]);
	const end = Number(ints[++index]);
	const position = Number(ints[++index]);
	const param1 = paramModes[0] === 0 ? Number(ints[start]) : start;
	const param2 = paramModes[1] === 0 ? Number(ints[end]) : end;
	ints[position] = Number(param1) * Number(param2);
	return index + 1;
};

const input = (ints, inputs, _, __, index) => {
	const saveIndex = Number(ints[++index]);
	const input = inputs.pop();
	ints[saveIndex] = input;
	return index + 1;
};

const output = (ints, _, outputs, __, index) => {
	const readIndex = Number(ints[++index]);
	outputs.push(ints[readIndex]);
	return index + 1;
}

const commands = {
	1: add,
	2: multiply,
	3: input,
	4: output,
}

const getCommand = (commandString) => {
	const commandInt = commandString.slice(-2);
	let param1 = 0, param2 = 0, param3 = 0;
	if (commandString.length > 2) {
		param1 = Number(commandString.slice(-3, -2));
	}
	if (commandString.length > 3) {
		param2 = Number(commandString.slice(-4, -3));
	}
	if (commandString.length > 4) {
		param3 = Number(commandString.slice(-5, -4));
	}
	return {
		command: commands[Number(commandInt)],
		paramModes: [param1, param2, param3]
	};
}
