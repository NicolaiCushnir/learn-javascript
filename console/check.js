function polindrom(str) {
	var clear_str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
	var length = clear_str.length;
	for (let i = 0; i < Math.floor(length / 2); i++) {
	if (clear_str[i] !== clear_str[length - 1 - i]) {
			return false;
		}
	}
	return true;
}

console.log( polindrom("unu") );