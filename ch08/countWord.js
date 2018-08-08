class EnglishWord{
  constructor(word){
    this.word = word;
  }
  count(){
    return this.word.length;
  }
};
class JapaneseWord{
  constructor(word){
    this.word = word;
  }
  count(){
    return this.word.length;
  }
};
const japaneseWord = new JapaneseWord("犬");
const englishWord = new EnglishWord("dog");
console.log(japaneseWord.word);
console.log(japaneseWord.count());
console.log(englishWord.word);
console.log(englishWord.count());
