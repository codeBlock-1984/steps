function clipObject(payload, lower, upper) {
  if(payload >= lower && payload <= upper) {
    return true;
  } else {
    return false;
  }
}

module.exports = clipObject;
