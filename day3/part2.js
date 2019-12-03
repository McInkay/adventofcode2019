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
	// EG: 1,1: {0: 100, 1: 25}
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
		let totalStepsSoFar = 0;
		line.split(",").forEach((action) => {
			const dir = action.substring(0, 1);
			const size = Number(action.substring(1));
			for (let i = 0; i < size; i++) {
				totalStepsSoFar++;
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
				positions[positionString][index] = positions[positionString][index] || totalStepsSoFar;
				if (positions[positionString][0] && positions[positionString][1]) {
					crosses.push(positions[positionString][0] + positions[positionString][1]);
				}
			}
		});
	});
	console.log(crosses);
	let closest;
	crosses.forEach((cross) => {
		if (!closest) {
			closest = cross;
		} else {
			if (cross < closest) {
				closest = cross;
			}
		}
	});
	console.log(closest);
});
