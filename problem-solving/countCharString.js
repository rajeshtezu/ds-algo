function countCharString(str) {
  const result = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (result[char] > 0) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }

  return result;
}
