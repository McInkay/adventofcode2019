const { Tree } = require("./tree");

module.exports = (data) => {
	const orbits = data.split("\n");
	const trees = [new Tree()];
	orbits.forEach((orbit, idx) => {
		console.log(idx);
		const [orbitee, moon] = orbit.split(")");
		let index = 0;
		let added = false;
		while(!added) {
			const tree = trees[index] || new Tree();
			if (!trees[index]) {
				trees.push(tree);
			}
			if (!tree._root) {
				tree.setRootNode(orbitee);
				added = true;
			}
			if (tree._root.value === moon) {
				tree.setRootNode(orbitee);
				added = true;
			} else {
				added = tree.addNode(moon, orbitee);
			}
			index++;
		}
		for(let i = trees.length - 1; i >= 0; i--) {
			const tree = trees[i];
			trees.some((otherTree) => {
				if (otherTree && tree !== otherTree && otherTree.contains(tree._root.value)) {
					otherTree.replaceNode(tree._root);
					trees.splice(i, 1);
					return true;
				}
			});
		}
	});
	return trees.reduce((total, tree) => tree ? total + tree.countOrbits() : total, 0);
}