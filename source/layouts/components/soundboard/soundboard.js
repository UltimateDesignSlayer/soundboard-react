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
      {name: 'D', startTime: 3.1, endTime: 4},
      {name: 'E', startTime: 4.1, endTime: 5.1},
      {name: 'F', startTime: 5.2, endTime: 6.2},
      {name: 'G', startTime: 6.35, endTime: 7.2},
      {name: 'H', startTime: 7.3, endTime: 8.225},
      {name: 'I', startTime: 8.5, endTime: 9.3},
      {name: 'J', startTime: 9.4, endTime: 10.4},
      {name: 'K', startTime: 10.6, endTime: 11.4},
      {name: 'L', startTime: 11.8, endTime: 12.7},
      {name: 'M', startTime: 12.9, endTime: 13.9},
      {name: 'N', startTime: 14.2, endTime: 15.1},
      {name: 'O', startTime: 15.2, endTime: 16.2},
      {name: 'P', startTime: 16.4, endTime: 17.5},
      {name: 'Q', startTime: 17.7, endTime: 18.7},
      {name: 'R', startTime: 18.9, endTime: 20},
      {name: 'S', startTime: 20.2, endTime: 21.1},
      {name: 'T', startTime: 21.3, endTime: 22.3},
      {name: 'U', startTime: 22.55, endTime: 23.4},
      {name: 'V', startTime: 23.4, endTime: 11.4},
      {name: 'W', startTime: 10.6, endTime: 11.4},
      {name: 'X', startTime: 10.6, endTime: 11.4},
      {name: 'Y', startTime: 10.6, endTime: 11.4},
      {name: 'Z', startTime: 10.6, endTime: 11.4}
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
      <div className='container soundboard-container'>
        <audio id="soundboardFile" src="http://morahman.co.uk/audio/abc.mp3" type="audio/mp3"></audio>

        <div className="row">
        {
          this.soundClipsArr.map(function(soundClip, i) {
            return <div className="col-xs-4 col-sm-3 col-md-1 sound-unit" key={i}><a onClick={that.playSegment.bind(that, soundClip.startTime, soundClip.endTime)}>{soundClip.name}</a></div>
          })
        }
        </div>

        <a className="btn btn-default">
          <span className="glyphicon glyphicon-chevron-left"></span>
        </a>
      </div>
    );
  }
}

export {Soundboard};
