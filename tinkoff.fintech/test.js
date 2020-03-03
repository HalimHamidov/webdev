
function f(x) {
	if (x < 1 || x > 12) 
		return "oh my god danila are you crazy";
	// if (x < 1 || abs(x) > pow(10, 3)) 
	return 28 + (x + Math.floor(x/8)) % 2 + 2 % x + 2 * Math.floor(1/x);
}