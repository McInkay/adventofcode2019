const fs = require("fs");

fs.readFile("./data.txt", "utf8", (err, data) => {
	if (err) {
		console.log("Error in file");
		process.exit(1);
	}
	const modules = data.split("\n").filter((module) => module);
	const fuelRequired = modules.reduce((total, module) => total + (Math.floor(Number(module) / 3) - 2), 0);
	console.log(fuelRequired);
});
