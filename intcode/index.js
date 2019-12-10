let relativeBase = 0;

module.exports = (ints, inputs) => {
	const outputs = [];
	let shouldExit = false;
	let index = 0;
	relativeBase = 0;
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

const getParam = (paramMode, param, ints) => {
	switch(paramMode) {
		case 0:
			return Number(ints[param]) || 0;
		case 1:
			return param;
		case 2:
			return Number(ints[relativeBase + param]) || 0;
	}
}

const getWriteParam = (paramMode, param) => {
	switch(paramMode) {
		case 0:
		case 1:
			return param;
		case 2:
			return relativeBase + param;
	}
}

const add = (ints, _, __, paramModes, index) => {
	const start = Number(ints[++index]);
	const end = Number(ints[++index]);
	const rawLocation = Number(ints[++index]);
	const location = getWriteParam(paramModes[2], rawLocation);
	const param1 = getParam(paramModes[0], start, ints);
	const param2 = getParam(paramModes[1], end, ints);
	ints[location] = Number(param1) + Number(param2);
	return index + 1;
};

const multiply = (ints, _, __, paramModes, index) => {
	const start = Number(ints[++index]);
	const end = Number(ints[++index]);
	const rawLocation = Number(ints[++index]);
	const location = getWriteParam(paramModes[2], rawLocation);
	const param1 = getParam(paramModes[0], start, ints);
	const param2 = getParam(paramModes[1], end, ints);
	ints[location] = Number(param1) * Number(param2);
	return index + 1;
};

const input = (ints, inputs, _, paramModes, index) => {
	const saveIndex = Number(ints[++index]);
	const toSave = getWriteParam(paramModes[0], saveIndex);
	const input = inputs.shift();
	ints[toSave] = input;
	return index + 1;
};

const output = (ints, _, outputs, paramModes, index) => {
	const readIndex = Number(ints[++index]);
	const toOutput = getParam(paramModes[0], readIndex, ints);
	outputs.push(toOutput);
	return index + 1;
}

const jumpTrue = (ints, inputs, outputs, paramModes, index) => {
	const checker = Number(ints[++index]);
	const shouldJump = getParam(paramModes[0], checker, ints) !== 0;
	if (shouldJump) {
		const newIndexIndex = Number(ints[++index]);
		const newIndex = getParam(paramModes[1], newIndexIndex, ints);
		return newIndex;
	}
	
	return index + 2;
}

const jumpFalse = (ints, inputs, outputs, paramModes, index) => {
	const checker = Number(ints[++index]);
	const shouldJump = getParam(paramModes[0], checker, ints) === 0;
	if (shouldJump) {
		const newIndexIndex = Number(ints[++index]);
		const newIndex = getParam(paramModes[1], newIndexIndex, ints);
		return newIndex;
	}
	
	return index + 2;
}

const lessThan = (ints, inputs, outputs, paramModes, index) => {
	const firstIndex = Number(ints[++index]);
	const secondIndex = Number(ints[++index]);
	const first = getParam(paramModes[0], firstIndex, ints);
	const second = getParam(paramModes[1], secondIndex, ints);
	const rawLocation = Number(ints[++index]);
	const location = getWriteParam(paramModes[2], rawLocation);
	const toStore = first < second ? 1 : 0;
	ints[location] = toStore;
	return index + 1;
}

const equals = (ints, inputs, outputs, paramModes, index) => {
	const firstIndex = Number(ints[++index]);
	const secondIndex = Number(ints[++index]);
	const first = getParam(paramModes[0], firstIndex, ints);
	const second = getParam(paramModes[1], secondIndex, ints);
	const rawLocation = Number(ints[++index]);
	const location = getWriteParam(paramModes[2], rawLocation);
	const toStore = first === second ? 1 : 0;
	ints[location] = toStore;
	return index + 1;
}

const setRelativeBase = (ints, inputs, outputs, paramModes, index) => {
	const param = Number(ints[++index]);
	relativeBase += getParam(paramModes[0], param, ints);
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
	9: setRelativeBase,
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
