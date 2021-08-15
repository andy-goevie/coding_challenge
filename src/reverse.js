
const reverseSentence = (sentence, reverseWords, reverseLetters) => {

  let words = sentence.split(' ');

  if(reverseLetters) {
    words = words.map( (word) => reverse(word, ''));
  }

  if(reverseWords) {
    words = words.reverse();
  }

  return words.join(' ');
}

const reverse = (arr, splitChar) => {
  return arr.split(splitChar).reverse().join(splitChar);
}

module.exports =
  { reverseSentence };

