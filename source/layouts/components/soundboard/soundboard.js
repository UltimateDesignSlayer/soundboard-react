import React from 'react';

class Soundboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      soundClipsArr: [],
      filePath: ''
    };

    this.getSoundboard();
  }

  getSoundboard() {
    // The data below will ideally be set up with a global state.
    // For example the Alphabet soundboard will have data to specify the file path to the audio file
    // and the data of segments to play. (e.g. 'A' sound clip is between 0:01 and 0:04, 'B' is between
    // 0:05 and 0:08 etc.).
    var that = this;
    var soundboardFile = '';
    var soundboardData = [];

    $.ajax({
      url: '/data/' + this.props.soundboardId + '.json',
      method: 'GET',
      success: function(data){
        var d = JSON.parse(data);

        that.setState({
          soundClipsArr: d[1],
          filePath: d[0].soundFilePath
        });
      }
    });

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

  playSegment(startTime, endTime) {
    this.audioSpriteEnd = endTime;
    this.audioElem.currentTime = startTime;
    this.audioElem.play();
  }

  //Go back to main menu
  changeAppState() {
    var itemStateObj = {
      appState: 'mainMenu',
      soundboardId: 'default',
      soundboardHeading: 'Soundboard!'
    }

    this.props.appStatusChanger(itemStateObj);
  }

  render() {
    var that = this;

    //:::WARNING:::
    // Every time we hit play, the virtual DOM is reloading so the audio tag is rewritten. This would explain why every time
    // I click play, the abc.wav file is loaded in again by the browser.

    return (
      <div className='container soundboard-container'>
        <audio id="soundboardFile" src={ this.state.filePath } type="audio/mp3"></audio>

        <div className="row">
        {
          this.state.soundClipsArr.map(function(soundClip, i) {
            return <div className="col-xs-4 col-sm-3 col-md-1 sound-unit" key={i}><a onClick={that.playSegment.bind(that, soundClip.startTime, soundClip.endTime)}>{soundClip.name}</a></div>
          })
        }
        </div>

        <a className="btn btn-default" onClick={ this.changeAppState.bind(this) }>
          <span className="glyphicon glyphicon-chevron-left"></span>
        </a>
      </div>
    );
  }
}

export {Soundboard};
