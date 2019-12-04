module.exports = (range) => {
	const passwordsToCheck = getRange(range);
	return passwordsToCheck.filter(meetsCriteria).length;
};

const getRange = (rangeString) => {
	const [start, end] = rangeString.split("-");
	const range = [];
	for (let i = start; i <= end; i++) {
		range.push(String(i));
	}
	return range;
}

const meetsCriteria = (password) => {
	return is6DigitNumber(password) && hasDouble(password) && neverDecreases(password);
}

const is6DigitNumber = (password) => {
	return password.length === 6 && Number.isInteger(Number(password));
}

const hasDouble = (password) => {
	for (let i = 0; i < password.length - 1; i++) {
		if (password[i] === password[i+1]) {
			return true;
		}
	}
	return false;
}

const neverDecreases = (password) => {
	for (let i = 0; i < password.length - 1; i++) {
		if (password[i] > password[i+1]) {
			return false;
		}
	}
	return true;
}