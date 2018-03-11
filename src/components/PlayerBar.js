import React, { Component } from 'react';
import './styles/playerbar.css';


class PlayerBar extends Component {
  render() {
    console.log("stringVolume", this.props.duration);
    return (
      <section className="player-bar">
        <section className="btn-group" id="buttons">
       <button className="btn btn-primary" id="previous" onClick={this.props.handlePrevClick}>
         <span className="ion-skip-backward"></span>
       </button>
       <button className="btn btn-primary" id="play-pause" onClick={this.props.handleSongClick}>
         <span className={this.props.isPlaying ? 'ion-pause' :'ion-play'}> </span>
       </button>
       <button className="btn btn-primary" id="next" onClick={this.props.handleNextClick}>
         <span className="ion-skip-forward"></span>
       </button>
       </section>
       <section id="time-control">
       <div className="current-time">{this.props.currentTime}</div>
            <input
              type="range"
              className="seek-bar"
              value={this.props.seekValue || 0}
              max="1"
              min="0"
              step="0.01"
              onChange={this.props.handleTimeChange}
              />
            <div className="total-time">{this.props.duration || 0}</div>
          </section>
       <section id="volume-control">
         <div className="icon ion-volume-low"></div>
         <input
            type="range"
            className="seek-bar"
            value={ this.props.volume }
            max="1"
            min="0"
            step="0.01"
            onChange={this.props.handleVolumeChange}
          />
         <div className="icon ion-volume-high"></div>
       </section>
      </section>
    );
  }
}

export default PlayerBar;
