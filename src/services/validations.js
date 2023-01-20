// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;

function isValid(name) {


return /^[a-zA-Z0-9]{8,}/.test(name);
    
    
}

exports.isEmpty = isEmpty;
exports.isValid = isValid;