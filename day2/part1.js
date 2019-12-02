const fs = require("fs");
const intCode = require("./intCode");

fs.readFile("./data.txt", "utf8", (err, data) => {
        if (err) {
                console.log("Error in file");
                process.exit(1);
        }
        const ints = data.split(",").map((int) => Number(int));
        console.log(intCode(ints)[0]);
});
