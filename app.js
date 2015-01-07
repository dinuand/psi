selected = [];

function markAsSelected (index, value) {
    localStorage.setItem(index, value);
    selected[index] = value;
}

function getScore (index) {
    return selected[index];
}

function printeaza (index) {
    document.write(index, selected[index]);
}
