const fs = require("fs");

fs.readFile("./data.txt", "utf8", (err, data) => {
	if (err) {
		console.log("Error in file");
		process.exit(1);
	}
	const modules = data.split("\n").filter((module) => module);
	const fuelRequired = modules.reduce((total, module) => total + fuelForModule(Number(module)), 0);
	console.log(fuelRequired);
});


const fuelForModule = (module) => {
	const fuelForMass = Math.floor(module / 3) - 2;
	let massStillRequiringFuel = fuelForMass;
	let fuelForFuel = 0;
        while (massStillRequiringFuel > 0) {
                const fuelToAdd = Math.floor(massStillRequiringFuel / 3) - 2;
                massStillRequiringFuel = fuelToAdd;
                if (fuelToAdd > 0) {
                        fuelForFuel += massStillRequiringFuel;
                }
        }
	return fuelForMass + fuelForFuel;
};

