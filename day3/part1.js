const fs = require("fs");

class Coordinate {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	right(num) {
		this.x += num;
		return this;
	}

	left(num) {
		this.x -= num;
		return this;
	}

	up(num) {
		this.y += num;
		return this;
	}

	down(num) {
		this.y -= num;
		return this;
	}

	toString() {
		return `${this.x},${this.y}`;
	}
}

const positions = {
	// EG: 1,1: [1]
};

const crosses = [];

const total = (cross) => cross.split(",").reduce((total, current) => total + Math.abs(Number(current)*1), 0);

fs.readFile("./data.txt", "utf8", (err, data) => {
        if (err) {
                console.log("Error in file");
                process.exit(1);
        }
        const lines = data.split("\n").filter((line) => line);
	console.log(lines);
	lines.forEach((line, index) => {
		let currentLocation = new Coordinate(0, 0);
		line.split(",").forEach((action) => {
			const dir = action.substring(0, 1);
			const size = Number(action.substring(1));
			for (let i = 0; i < size; i++) {
				switch (dir) {
					case "R":
						currentLocation.right(1);
						break;
					case "L":
						currentLocation.left(1);
						break;
					case "U":
						currentLocation.up(1);
						break;
					case "D":
						currentLocation.down(1);
						break;
				}
				const positionString = currentLocation.toString();
				positions[positionString] = positions[positionString] || [];
				positions[positionString].push(index);
				if (positions[positionString].includes(0) && positions[positionString].includes(1)) {
					crosses.push(positionString);
				}
			}
		});
	});
	console.log(crosses);
	let closest;
	crosses.forEach((cross) => {
		const currentTotal = total(cross)
		if (!closest) {
			closest = currentTotal;
		} else {
			if (currentTotal < closest) {
				closest = currentTotal;
			}
		}
	});
	console.log(closest);
});
