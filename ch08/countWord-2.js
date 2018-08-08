class Word{
  constructor(word){
    this.word = word;
  };
  count(){
    return this.word.length;
  };
  lookUp(){
    if (this instanceof JapaneseWord){
      return `http://jisho.org/search/${this.word}`;
    }else{
      return `https://en.wiktionary.org/wiki/${this.word}`;
    }
  };
};

class EnglishWord extends Word{};
class JapaneseWord extends Word{};

const japaneseWord = new JapaneseWord("犬");
const englishWord = new EnglishWord("dog");
console.log(japaneseWord.count());
console.log(japaneseWord.word);
console.log(englishWord.count());
console.log(englishWord.word);
console.log(englishWord.lookUp());
console.log(japaneseWord.lookUp());

