
const classifier = {
  songList: {
    allChords: new Set(),
    difficulties: ['easy', 'medium', 'hard'],
    songs: [],
    addSong: function(name, chords, difficulty){
      this.songs.push({name: name,
                      chords: chords,
                      difficulty: this.difficulties[difficulty]})
    }
  },
  labelCounts: new Map(),
  labelProbabilities: new Map(),
  chordCountsInLabels: new Map(),
  smoothing: 1.01,
  setChordCountsInLabels: function(){
    classifier.songList.songs.forEach(function(song){
      if(this.chordCountsInLabels.get(song.difficulty) === undefined){
        this.chordCountsInLabels.set(song.difficulty, {});
      }
      song.chords.forEach(function(chord){
        if(this.chordCountsInLabels.get(song.difficulty)[chord] > 0){
          this.chordCountsInLabels.get(song.difficulty)[chord] += 1;
        } else {
          this.chordCountsInLabels.get(song.difficulty)[chord] = 1;
        }
      }, this);
    }, this);
  },
  chordCountForDifficulty: function(difficulty, testChord){
  return classifier.songList.songs.reduce(function(counter, song){
    if(song.difficulty === difficulty){
      counter += song.chords.filter(function(chord){
        return chord === testChord;
      }).length;
    }
    return counter;
  }, 0);
 },
  setProbabilityOfChordsInLabels: function(){
    this.chordCountsInLabels.forEach(function(_chords, difficulty){
      Object.keys(this.chordCountsInLabels.get(difficulty))
        .forEach(function(chord){
          this.chordCountsInLabels.get(difficulty)[chord]
  /= this.songs.length;
      }, this);
    }, this);
  },
  likelihoodFromChord: function(difficulty, chord){
   return this.chordCountForDifficulty(difficulty, chord) /
   classifier.songList.songs.length;
  },
  valueForChordDifficulty(difficulty, chord){
    const value = this.likelihoodFromChord(difficulty, chord);
    return value ? value + this.smoothing : 1;
  },
  classify: function(chords){
    return new Map(Array.from(
      this.labelProbabilities.entries()).map((labelWithProbability) => {
      const difficulty = labelWithProbability[0];
      return [difficulty, chords.reduce((total, chord) => {
        return total * this.valueForChordDifficulty(difficulty, chord);
        }, this.labelProbabilities.get(difficulty) + this.smoothing)];
      }));
   },
   trainAll: function(){
      classifier.songList.songs.forEach(function(song){
        this.train(song.chords, song.difficulty);
      }, this);
      this.setLabelProbabilities();
    },

    train: function(chords, label){
      chords.forEach(chord => { classifier.songList.allChords.add(chord) });
      if(Array.from(this.labelCounts.keys()).includes(label)){
        this.labelCounts.set(label, this.labelCounts.get(label) + 1);
      } else {
        this.labelCounts.set(label, 1);
      }
    },

    setLabelProbabilities: function(){
      this.labelCounts.forEach(function(_count, label){
        this.labelProbabilities.set(label, this.labelCounts.get(label) /
    classifier.songList.songs.length);
      }, this);
    }


};


// function train(chords, label){
//   chords.forEach(chord => classifier.allChords.add(chord));
//   if(Array.from(classifier.labelCounts.keys()).includes(label)){
//     classifier.labelCounts.set(label, classifier.labelCounts.get(label) + 1);
//   } else {
//     classifier.labelCounts.set(label, 1);
//   }
// };

// function setLabelProbabilities(){
//   classifier.labelCounts.forEach(function(_count, label){
//     classifier.labelProbabilities.set(label, 
//       classifier.labelCounts.get(label) / songList.songs.length);
//   })
// };


// function setChordCountsInLabels(){
//   songList.songs.forEach(function(song){
//     if(classifier.chordCountsInLabels.get(song.difficulty)
// === undefined){
//       classifier.chordCountsInLabels.set(song.difficulty, {});
//     }
//     song.chords.forEach(function(chord){
//       if(classifier.chordCountsInLabels.get(song.difficulty)[chord] >
// 0){
//         classifier.chordCountsInLabels.get(song.difficulty)[chord] +=
// 1;
//       } else {
//         classifier.chordCountsInLabels.get(song.difficulty)[chord] =
// 1;
//       }
//     });
//   });
// }


// function setProbabilityOfChordsInLabels(){
//   classifier.chordCountsInLabels.forEach(function(_chords, difficulty){
//     Object.keys(classifier.chordCountsInLabels.get(difficulty))
//       .forEach(function(chord){
//         classifier.chordCountsInLabels.get(difficulty)[chord]
// /= classifier.songs.length;
//     });
//   });
// }


// function trainAll(){
//   songList.songs.forEach(function(song){
//     train(song.chords, song.difficulty);
//   });
//   setLabelProbabilities();
// };


function setLabelsAndProbabilities(){
  setLabelProbabilities();
};



const wish = require('wish');
describe('the file', function() {
  classifier.songList.addSong('imagine',
['c', 'cmaj7', 'f', 'am', 'dm', 'g', 'e7'], 0);
  classifier.songList.addSong('somewhereOverTheRainbow',
['c', 'em', 'f', 'g', 'am'], 0);
  classifier.songList.addSong('tooManyCooks', ['c', 'g', 'f'], 0);
  classifier.songList.addSong('iWillFollowYouIntoTheDark',
['f', 'dm', 'bb', 'c', 'a', 'bbm'], 1);
  classifier.songList.addSong('babyOneMoreTime',
['cm', 'g', 'bb', 'eb', 'fm', 'ab'], 1);
  classifier.songList.addSong('creep',
['g', 'gsus4', 'b', 'bsus4', 'c', 'cmsus4', 'cm6'], 1);
  classifier.songList.addSong('paperBag',
['bm7', 'e', 'c', 'g', 'b7', 'f', 'em',
 'a', 'cmaj7', 'em7', 'a7', 'f7',
 'b'], 2);
  classifier.songList.addSong('toxic',
['cm', 'eb', 'g', 'cdim', 'eb7', 'd7', 'db7', 'ab', 'gmaj7', 'g7'], 2);
  classifier.songList.addSong('bulletproof',
['d#m', 'g#', 'b', 'f#', 'g#m', 'c#'], 2);
  classifier.trainAll();
  console.log(classifier.probabilityOfChordsInLabels);
  console.log(classifier.chordCountsInLabels);

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
