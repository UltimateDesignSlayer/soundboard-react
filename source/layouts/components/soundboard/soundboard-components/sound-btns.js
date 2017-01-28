import React from 'react';

class SoundButton extends React.Component {
  constructor(props) {
    super(props);
    this.soundButtonContent = '';
    this.getButtonType();
  }

  getButtonType() {
    switch (this.props.soundboardButtonType) {
      case 'chars':
        this.soundButtonContent = this.props.soundClip.name;
        break;
      case 'images':
        this.soundButtonContent = <img src={this.props.soundClip.base64} className="img-responsive" alt={this.props.soundClip.name} />;
        break;
      default:
        this.soundButtonContent = this.props.soundClip.name;
    }
  }

  render() {
    return(
      <span>{this.soundButtonContent}</span>
    );
  }
}

export {SoundButton};
