module.exports = (data) => {
	const width = 25;
	const height = 6;

	const pixels = data.split("");
	const pixelsPerLayer = width * height;
	const numLayers = data.length / pixelsPerLayer;

	const image = "2".repeat(pixelsPerLayer).split("");

	for (let layerNum = 0; layerNum < numLayers; layerNum++) {
		const first = layerNum * pixelsPerLayer;
		const last = first + pixelsPerLayer - 1;

		const layer = pixels.slice(first, last + 1);
		
		layer.forEach((pixel, index) => {
			if (image[index] == 2 && pixel != 2) {
				image[index] = pixel;
			}
		});
	}

	const lines = [];
	for (let i = 0; i < height; i++) {
		lines.push(image.slice(i * width, i * width + width))
	}
	console.log(lines);
	return lines.join("\n");
}