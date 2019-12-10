const intCode = require("../intcode");

module.exports = (data) => {
	const ints = data.split(",");
	const inputs = [2];
	return intCode(ints, inputs);
}