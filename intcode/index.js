
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
			return outputs;
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
	const input = inputs.shift();
	ints[saveIndex] = input;
	return index + 1;
};

const output = (ints, _, outputs, paramModes, index) => {
	const readIndex = Number(ints[++index]);
	const toOutput = paramModes[0] === 0 ? ints[readIndex] : readIndex;
	outputs.push(toOutput);
	return index + 1;
}

const jumpTrue = (ints, inputs, outputs, paramModes, index) => {
	const checker = Number(ints[++index]);
	const shouldJump = paramModes[0] === 0 ? Number(ints[checker]) !== 0 : checker !== 0;
	if (shouldJump) {
		const newIndexIndex = Number(ints[++index]);
		const newIndex = paramModes[1] === 0 ? Number(ints[newIndexIndex]) : newIndexIndex;
		return newIndex;
	}
	
	return index + 2;
}

const jumpFalse = (ints, inputs, outputs, paramModes, index) => {
	const checker = Number(ints[++index]);
	const shouldJump = paramModes[0] === 0 ? Number(ints[checker]) === 0 : checker === 0;
	if (shouldJump) {
		const newIndexIndex = Number(ints[++index]);
		const newIndex = paramModes[1] === 0 ? Number(ints[newIndexIndex]) : newIndexIndex;
		return newIndex;
	}
	
	return index + 2;
}

const lessThan = (ints, inputs, outputs, paramModes, index) => {
	const firstIndex = Number(ints[++index]);
	const secondIndex = Number(ints[++index]);
	const first = paramModes[0] === 0 ? Number(ints[firstIndex]) : firstIndex;
	const second = paramModes[1] === 0 ? Number(ints[secondIndex]) : secondIndex;
	const location = Number(ints[++index]);
	const toStore = first < second ? 1 : 0;
	ints[location] = toStore;
	return index + 1;
}

const equals = (ints, inputs, outputs, paramModes, index) => {
	const firstIndex = Number(ints[++index]);
	const secondIndex = Number(ints[++index]);
	const first = paramModes[0] === 0 ? Number(ints[firstIndex]) : firstIndex;
	const second = paramModes[1] === 0 ? Number(ints[secondIndex]) : secondIndex;
	const location = Number(ints[++index]);
	const toStore = first === second ? 1 : 0;
	ints[location] = toStore;
	return index + 1;
}

const commands = {
	1: add,
	2: multiply,
	3: input,
	4: output,
	5: jumpTrue,
	6: jumpFalse,
	7: lessThan,
	8: equals,
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
