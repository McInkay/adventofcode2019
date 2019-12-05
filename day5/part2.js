const intCode = require("./intCode");

module.exports = (data) => {
	const ints = data.split(",");
	const inputs = [5];
	return intCode(ints, inputs);
}