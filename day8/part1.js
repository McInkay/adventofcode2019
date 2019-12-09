module.exports = (data) => {
	const width = 25;
	const height = 6;

	const pixels = data.split("");
	const pixelsPerLayer = width * height;
	const numLayers = data.length / pixelsPerLayer;

	const leastZeros = [151, ""];

	for (let layerNum = 0; layerNum < numLayers; layerNum++) {
		const first = layerNum * 150;
		const last = first + 149;

		const layer = data.slice(first, last + 1);
		const zeros = layer.replace(/[^0]/g, "").length;
		if (zeros < leastZeros[0]) {
			leastZeros[0] = zeros;
			leastZeros[1] = layer;
		}
	}


	const ones = leastZeros[1].replace(/[^1]/g, "").length;
	const twos = leastZeros[1].replace(/[^2]/g, "").length;

	return ones * twos;
	
}