'use strict';

const CaesarCipher = () => {
  // formula => (index + offset) % 26
  const letters = Array.from({ length: 26 }, (_, i) =>
    // create array of lower case letters a-z
    String.fromCharCode(97 + i)
  );

  const swapChar = (char, offset, encrypt, lowerCase = true) => {
    // find char in letters array
    const charIndex = letters.indexOf(char.toLowerCase());
    // apply formula to get letter shift, add for encryption subtract for decryption
    const resultIndex = encrypt
      ? (charIndex + offset) % 26
      : (charIndex - offset) % 26;
    // offset is right if positive / left id is negative
    const result =
      resultIndex < 0
        ? letters[letters.length + resultIndex]
        : letters[resultIndex];
    // return lower or uppercase depending on inputted char
    return lowerCase ? result : result.toUpperCase();
  };

  const swapMessage = (text, offset, encrypt = true) => {
    if (offset === 0) return text;
    return text
      .split('')
      .map(char => {
        if (char.match(/[a-z]/)) return swapChar(char, offset, encrypt);
        if (char.match(/[A-Z]/)) return swapChar(char, offset, encrypt, false);
        return char;
      })
      .join('');
  };

  const encrypt = (text, offset) => {
    return swapMessage(text, offset);
  };

  const decrypt = (text, offset) => {
    return swapMessage(text, offset, false);
  };

  return { encrypt, decrypt };
};

export default CaesarCipher();
