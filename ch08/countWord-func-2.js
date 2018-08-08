function Word(){
  this.count = function(){
    return this.word.length;
  };
  this.lookUp = function(){
    return this.lookUpUrl + this.word;
  };
};

function EnglishWord(word){
  Word.call(this);
  this.word = word;
  this.language = "English";
  this.lookUpUrl = 'https://en.wiktionary.org/wiki/';
};

function JapaneseWord(word){
  Word.call(this);
  this.word = word;
  this.language = "Japanese";
  this.lookUpUrl = 'http://jisho.org/search/';
};

JapaneseWord.prototype = Object.create(Word.prototype);
Word.prototype.reportLanguage = function(){
  return `The language is: ${this.language}`;
};
const japaneseWord = new JapaneseWord("犬");
console.log(japaneseWord.reportLanguage());

