class Word{
  constructor(word, language, lookUpUrl){
    this.word = word;
    this.language = language;
    this.lookUpUrl = lookUpUrl;
  };
  count(){
    return this.word.length;
  };
  lookUp(){
    return this.lookUpUrl + this.word;
  };

};

class EnglishWord extends Word{
  constructor(word){
    super(word, 'English', 'https://en.wiktionary.org/wiki/');
  };
};
class JapaneseWord extends Word{
  constructor(word){
    super(word, 'Japanese', 'http://jisho.org/search/');
  };
};




const japaneseWord = new JapaneseWord("犬");
const englishWord = new EnglishWord("dog");
console.log(japaneseWord.count());
console.log(japaneseWord.word);
console.log(englishWord.count());
console.log(englishWord.word);
console.log(englishWord.lookUp());
console.log(japaneseWord.lookUp());
