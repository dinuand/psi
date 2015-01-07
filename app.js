var selected = [];
var log = 0;
loginButton.disabled = 'true';

function markAsSelected (index, value) {
	selected[index] = value;
	document.write(index, selected[index]);
}

function login () {
	log = log + 1;
	if (log >= 2) loginButton.disabled = 'false';
}