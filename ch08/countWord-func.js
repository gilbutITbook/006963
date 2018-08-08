function Word(word, language, lookUpUrl){
  this.word = word;
  this.language = language;
  this.lookUpUrl = lookUpUrl;
  this.count = function(){
    return this.word.length;
  };
  this.lookUp = function(){
    return this.lookUpUrl + this.word;
  };
};

function EnglishWord(word){
  Word.call(this, word, "English", 'https://en.wiktionary.org/wiki/');
};

function JapaneseWord(word){
  Word.call(this, word, "Japanese", 'http://jisho.org/search/');
};

JapaneseWord.prototype = Object.create(Word.prototype);
JapaneseWord.prototype.constructor = JapaneseWord;
EnglishWord.prototype = Object.create(Word.prototype);
EnglishWord.prototype.constructor = EnglishWord;
