const intCode = require("./intCode");

module.exports = (data) => {
	const lines = data.split("\n");
	const ints = lines[0].split(",");
	lines.splice(0, 1);
	return intCode(ints, lines).pop();
}