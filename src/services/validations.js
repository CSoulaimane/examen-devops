// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;

function isValid(name) {
    return /^[a-zA-Z]{8,}[1-9]{1,}[/^;.,_]{1,}/.test(name);
}

exports.isEmpty = isEmpty;
exports.isValid = isValid;
