const part1 = (data) => {
	const modules = data.split("\n").filter((module) => module);
	const fuelRequired = modules.reduce((total, module) => total + fuelForMass(Number(module)), 0);
	return fuelRequired;
}

const part2 = (data) => {
	const modules = data.split("\n").filter((module) => module);
	const fuelRequired = modules.reduce((total, module) => total + fuelForModule(Number(module)), 0);
	return fuelRequired;
}

module.exports = {
	part1, part2
}

const fuelForMass = (module) => {
	return Math.floor(module / 3) - 2
};

const fuelForModule = (module) => {
	let massStillRequiringFuel = fuelForMass(module);
	let fuelForFuel = 0;
        while (massStillRequiringFuel > 0) {
                const fuelToAdd = Math.floor(massStillRequiringFuel / 3) - 2;
                massStillRequiringFuel = fuelToAdd;
                if (fuelToAdd > 0) {
                        fuelForFuel += massStillRequiringFuel;
                }
        }
	return fuelForMass(module) + fuelForFuel;
};
