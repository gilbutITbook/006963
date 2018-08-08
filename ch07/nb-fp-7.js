var songList = {
  songs: [],
  addSong: function(name, chords, difficulty){
    this.songs.push({name: name,
                    chords: chords,
                    difficulty: difficulty});
  }
};


var classifier = {
  songs: [],
  allChords: new Set(),
  labelCounts: new Map(),
  labelProbabilities: new Map(),
  chordCountsInLabels: new Map(),
  probabilityOfChordsInLabels: new Map()
};



function setDifficulties(){
  easy = 'easy';
  medium = 'medium';
  hard = 'hard';
};

function setSongs(){
  songList.addSong('imagine',
['c', 'cmaj7', 'f', 'am', 'dm', 'g', 'e7'], easy)
  songList.addSong('somewhereOverTheRainbow',
['c', 'em', 'f', 'g', 'am'], easy)
  songList.addSong('tooManyCooks', ['c', 'g', 'f'], easy)
  songList.addSong('iWillFollowYouIntoTheDark',
['f', 'dm', 'bb', 'c', 'a', 'bbm'], medium);
  songList.addSong('babyOneMoreTime',
['cm', 'g', 'bb', 'eb', 'fm', 'ab'], medium);
  songList.addSong('creep',
['g', 'gsus4', 'b', 'bsus4', 'c', 'cmsus4', 'cm6'], medium);
  songList.addSong('paperBag',
['bm7', 'e', 'c', 'g', 'b7', 'f', 'em',
'a', 'cmaj7', 'em7', 'a7', 'f7',
'b'], hard);
  songList.addSong('toxic',
['cm', 'eb', 'g', 'cdim', 'eb7', 
'd7', 'db7', 'ab', 'gmaj7', 'g7'], hard);
  songList.addSong('bulletproof',
['d#m', 'g#', 'b', 'f#', 'g#m', 'c#'], hard);
};



function train(chords, label){
  classifier.songs.push({label, chords});
  chords.forEach(chord => classifier.allChords.add(chord));
  if(Array.from(classifier.labelCounts.keys()).includes(label)){
    classifier.labelCounts.set(label, classifier.labelCounts.get(label) + 1);
  } else {
    classifier.labelCounts.set(label, 1);
  }
};

function setLabelProbabilities(){
  classifier.labelCounts.forEach(function(_count, label){
    classifier.labelProbabilities.set(label,
                           classifier.labelCounts.get(label) / classifier.songs.length);
  });
};

function setChordCountsInLabels(){
  classifier.songs.forEach(function(song){
    if(classifier.chordCountsInLabels.get(song.label) === undefined){
      classifier.chordCountsInLabels.set(song.label, {});
    }
    song.chords.forEach(function(chord){
      if(classifier.chordCountsInLabels.get(song.label)[chord] > 0){
        classifier.chordCountsInLabels.get(song.label)[chord] += 1;
      } else {
        classifier.chordCountsInLabels.get(song.label)[chord] = 1;
      }
    });
  });
}

function setProbabilityOfChordsInLabels(){
  classifier.probabilityOfChordsInLabels = classifier.chordCountsInLabels;
  classifier.probabilityOfChordsInLabels.forEach(function(_chords, difficulty){
    Object.keys(classifier.probabilityOfChordsInLabels.get(difficulty)).forEach(
function(chord){
      classifier.probabilityOfChordsInLabels.get(difficulty)[chord]
/= classifier.songs.length;
    });
  });
}

function trainAll(){
  setDifficulties();
  setSongs();
  songList.songs.forEach(function(song){
    train(song.chords, song.difficulty);
  });
  setLabelsAndProbabilities();
};


function setLabelsAndProbabilities(){
  setLabelProbabilities();
  setChordCountsInLabels();
  setProbabilityOfChordsInLabels();
};

function classify(chords){
  var smoothing = 1.01;
  var classified = new Map();
  classifier.labelProbabilities.forEach(function(_probabilities, difficulty){
    var first = classifier.labelProbabilities.get(difficulty) + smoothing;
    chords.forEach(function(chord){
      var probabilityOfChordInLabel =
classifier.probabilityOfChordsInLabels.get(difficulty)[chord];
      if(probabilityOfChordInLabel){
        first = first * (probabilityOfChordInLabel + smoothing);
      }
    });
    classified.set(difficulty, first);
  });
  return classified;
};

var wish = require('wish');
describe('the file', function() {
  trainAll();
  it('classifies', function(){
    var classified = classify(['f#m7', 'a', 'dadd9',
                               'dmaj7', 'bm', 'bm7', 'd', 'f#m']);
    wish(classified.get('easy') === 1.3433333333333333);
    wish(classified.get('medium') === 1.5060259259259259);
    wish(classified.get('hard') === 1.6884223991769547);
  });
  it('classifies again', function(){
    var classified = classify(['d', 'g', 'e', 'dm']);
    wish(classified.get('easy') === 2.023094827160494);
    wish(classified.get('medium') === 1.855758613168724);
    wish(classified.get('hard') === 1.855758613168724);
  });
  it('label probabilities', function(){
    wish(classifier.labelProbabilities.get('easy') === 0.3333333333333333);
    wish(classifier.labelProbabilities.get('medium') === 0.3333333333333333);
    wish(classifier.labelProbabilities.get('hard') === 0.3333333333333333);
  });
});
