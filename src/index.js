module.exports = function check(str, bracketsConfig) {
  const unitBracketsConfig = bracketsConfig.map(item => item.join(''));
  const halfStrLength = str.length / 2;

  for (let i = 0; i < halfStrLength; i++) {
    for (const pair of unitBracketsConfig) {
      str = str.replace(pair, '');
    }
  }

  return !str.length;
}
