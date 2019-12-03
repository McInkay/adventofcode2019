const intCode = require("./intCode");

module.exports = (data) => {
        const ints = data.split(",").map((int) => Number(int));
        ints[1] = 12;
        ints[2] = 2;
        return intCode(ints)[0];
}