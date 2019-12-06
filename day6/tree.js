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
