import React from 'react';

class Soundboard extends React.Component {
  constructor() {
    super();

    // The data below will ideally be set up with a global state.
    // For example the Alphabet sound board will have data to specify the file path to the audio file
    // and the data of segments to play. (e.g. 'A' sound clip is between 0:01 and 0:04, 'B' is between
    // 0:05 and 0:08 etc.).

    this.soundClipsArr = [
      {name: 'A', startTime: 0, endTime: 0.9},
      {name: 'B', startTime: 1, endTime: 1.9},
      {name: 'C', startTime: 2, endTime: 3},
      {name: 'D', startTime: 3.1, endTime: 4}
    ];

    this.filePath = 'http://morahman.co.uk/audio/abc.mp3';
  }

  componentDidMount() {
    var that = this;
    this.audioElem = document.getElementById('soundboardFile');

    console.log(this.audioElem.src);

    this.audioElem.addEventListener('timeupdate', function(){
      console.log('played', this.currentTime);
      console.log('end time', that.audioSpriteEnd);
      if(this.currentTime >= that.audioSpriteEnd) {
        this.pause();
      }
    });
    console.log(this.audioElem.src);
  }

  getSoundboardAudio(filepath) {

  }

  audioTimeUpdateHandler() {

  }

  bindEvents() {

  }

  playSegment(startTime, endTime) {
    this.audioSpriteEnd = endTime;
    this.audioElem.currentTime = startTime;
    this.audioElem.play();
  }

  render() {
    var that = this;

    //:::WARNING:::
    // Every time we hit play, the virtual DOM is reloading so the audio tag is rewritten. This would explain why every time
    // I click play, the abc.wav file is loaded in again by the browser.

    return (
      <div className='soundboard-container'>
        <audio id="soundboardFile" src="http://morahman.co.uk/audio/abc.mp3" type="audio/mp3"></audio>

        <ul>
        {
          this.soundClipsArr.map(function(soundClip, i) {
            return <li key={i}><a onClick={that.playSegment.bind(that, soundClip.startTime, soundClip.endTime)}>{soundClip.name}</a></li>
          })
        }
        </ul>
      </div>
    );
  }
}

export {Soundboard};
