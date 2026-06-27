const isLowercaseAlpha = (char) => {
  const charCode = char.charCodeAt(0);
  return charCode >= 97 && charCode <= 122;
};
const isUppercaseAlpha = (char) => {
  const charCode = char.charCodeAt(0);
  return charCode >= 65 && charCode <= 90;
};
const isNumeric = (char) => {
  const charCode = char.charCodeAt(0);
  return charCode >= 48 && charCode <= 57;
};

const withCharCode = (char) => {
  return (
    isLowercaseAlpha(char) ||
    isUppercaseAlpha(char) ||
    isNumeric(char)
  );
};

const withRegex = (char) => {
  const ALPHANUMERIC_REGEX = /[a-z0-9]/i;
  return ALPHANUMERIC_REGEX.test(char);
};

const isAlphanumeric = {
  withCharCode,
  withRegex,
};

module.exports = isAlphanumeric;
