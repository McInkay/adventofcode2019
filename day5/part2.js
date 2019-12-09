const intCode = require("../intcode/");

module.exports = (data) => {
	const ints = data.split(",");
	const inputs = [5];
	return intCode(ints, inputs);
}