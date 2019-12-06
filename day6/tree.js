export class Tree {
    constructor() {
      this._root = null;
    }

    countOrbits() {
        if (this._root === null) {
            return 0;
        }
        let levelIndex = 1;
        let level = [this._root];
        let orbits = 0;
        while(level.length > 0) {
            const ancestors = level.reduce((all, node) => all.concat(node.children), []);
            orbits += ancestors.length * levelIndex;
            level = ancestors;
            levelIndex++;
        }
        return orbits;
    }
  
    traverse(callback) {
      function goThrough(node) {
        callback(node);
        node.children.forEach((child) => {
          goThrough(child);
        });
      }
      goThrough(this._root);
    }
  
    setRootNode(value) {
        const oldRoot = this._root;
        this._root = null;
        this.addNode(value);
        if (oldRoot) {
            this._root.children.push(oldRoot);
        }
    }
  
    addNode(value, parentValue, children) {
      const newNode = {
        value,
        children: children || []
      };
  
      if (this._root === null) {
        this._root = newNode;
        return true;
      }

      let added = false;
  
      this.traverse((node) => {
        if (node.value === parentValue) {
          node.children.push(newNode);
          added = true;
        }
      });

      return added;
    }
  
    removeNode(value) {
      this.traverse((node) => {
        node.children.forEach((childNode, index) => {
          if (childNode.value === value) {
            node.children.splice(index, 1);
          }
        });
      });
    }

    contains(value) {
        let contains = false;
        this.traverse((node) => {
            if (node.value === value) {
                contains = true;
            }
        });
        return contains;
    }

    distanceBetween(val1, val2) {
        function distanceToXY(node, xVal, yVal) {
            let x = null, y = null;
            if (node.value === xVal) {
                x = 0;
            }
            if (node.value === yVal) {
                y = 0;
            }
            node.children.forEach((child) => {
                const [childx, childy] = distanceToXY(child, xVal, yVal);
                if (childx !== null) {
                    x = childy !== null ? childx : childx + 1;
                }
                if (childy !== null) {
                    y = childx !== null ? childy : childy + 1;
                }
            });
            return [x, y];
        }
        const [x, y] = distanceToXY(this._root, val1, val2);
        return x + y - 2;
    }

    replaceNode(newNode) {
        let added = false;
        this.traverse((node) => {
            if (node.value === newNode.value) {
                node.children = node.children.concat(newNode.children);
                added = true;
            }
        });
        return added;
    }
  
}

export const getTreeOfOrbits = (orbits) => {
	const trees = [new Tree()];
	orbits.forEach((orbit, idx) => {
        if (idx % 100 === 0) {
		    console.log(idx);
        }
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
    console.log(trees.length);
    return trees[0];
}