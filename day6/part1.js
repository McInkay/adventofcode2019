const { getTotalOrbits, getTreeOfOrbits } = require("./tree");

module.exports = (data) => {
	console.time('part1');
	const orbits = data.split("\n");
	const totalOrbits = getTreeOfOrbits(orbits).countOrbits();
	console.timeEnd('part1');
	return totalOrbits;
}