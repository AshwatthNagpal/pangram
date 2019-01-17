export const isPangram = (sentence) => {
  if (sentence === '') {
    return false;
  }
  const lowercaseSentence = sentence.toLowerCase();
  const allAlphabets = 'abcdefghijklmnopqrstuvwxyz';
  return allAlphabets.split('').reduce((result, alphabet) => result && lowercaseSentence.includes(alphabet), true);
};
