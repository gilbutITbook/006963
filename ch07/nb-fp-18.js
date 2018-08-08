const songList = {
  difficulties: ['easy', 'medium', 'hard'],
  songs: [],
  addSong: function(name, chords, difficulty){
    this.songs.push({name: name,
                    chords: chords,
                    difficulty: this.difficulties[difficulty]})
  }
};

const classifier = {
  songs: [],
  allChords: new Set(),
  labelCounts: new Map(),
  labelProbabilities: new Map(),
  chordCountsInLabels: new Map(),
  probabilityOfChordsInLabels: new Map(),
  classify: function(chords){
    const smoothing = 1.01;
    const classified = new Map();
    classifier.labelProbabilities.forEach(
function(_probabilities, difficulty){
      const totalLikelihood = chords.reduce(function(total, chord){
        const probabilityOfChordInLabel =
classifier.probabilityOfChordsInLabels.get(difficulty)[chord]
        if(probabilityOfChordInLabel){
          return total * (probabilityOfChordInLabel + smoothing);
        }else{
          return total;
        }
      }, classifier.labelProbabilities.get(difficulty) + smoothing);
      classified.set(difficulty, totalLikelihood);
    });
    return classified;
  }
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


const wish = require('wish');
describe('the file', function() {
  songList.addSong('imagine',
['c', 'cmaj7', 'f', 'am', 'dm', 'g', 'e7'], 0);
  songList.addSong('somewhereOverTheRainbow',
['c', 'em', 'f', 'g', 'am'], 0);
  songList.addSong('tooManyCooks', ['c', 'g', 'f'], 0);
  songList.addSong('iWillFollowYouIntoTheDark',
['f', 'dm', 'bb', 'c', 'a', 'bbm'], 1);
  songList.addSong('babyOneMoreTime',
['cm', 'g', 'bb', 'eb', 'fm', 'ab'], 1);
  songList.addSong('creep',
['g', 'gsus4', 'b', 'bsus4', 'c', 'cmsus4', 'cm6'], 1);
  songList.addSong('paperBag',
['bm7', 'e', 'c', 'g', 'b7', 'f', 'em',
 'a', 'cmaj7', 'em7', 'a7', 'f7',
 'b'], 2);
  songList.addSong('toxic',
['cm', 'eb', 'g', 'cdim', 'eb7', 'd7', 'db7', 'ab', 'gmaj7', 'g7'], 2);
  songList.addSong('bulletproof',
['d#m', 'g#', 'b', 'f#', 'g#m', 'c#'], 2);
  trainAll();
  it('classifies', function(){
    const classified = classifier.classify(['f#m7', 'a', 'dadd9', 
                                        'dmaj7', 'bm', 'bm7',
                                        'd', 'f#m']);
    wish(classified.get('easy') === 1.3433333333333333);
    wish(classified.get('medium') === 1.5060259259259259);
    wish(classified.get('hard') === 1.6884223991769547);
  });
  it('classifies again', function(){
    const classified = classifier.classify(['d', 'g', 'e', 'dm']);
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
