const { getTreeOfOrbits } = require("./tree");

module.exports = (data) => {
	console.time('part2');
	const orbits = data.split("\n");
	const tree = getTreeOfOrbits(orbits);
	const distanceBetween = tree.distanceBetween("YOU", "SAN");
	console.timeEnd('part2');
	return distanceBetween;
}