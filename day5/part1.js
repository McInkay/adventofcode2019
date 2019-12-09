const intCode = require("../intcode/");

module.exports = (data) => {
	const ints = data.split(",");
	const inputs = [1];
	return intCode(ints, inputs).pop();
}