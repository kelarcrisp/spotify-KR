import React, { Component } from 'react';
import classes from './TopTracks.module.css';
class TopTracks extends Component {
    render() {
        return (
            <div className={classes.TopTracksContainer} >
                <header className={classes.TopTracksHeader}>Top tracks of all time</header>
                <div className={classes.TopTracksImage}>
                    <img alt='topArtistImage'></img>
                </div>
                <div className={classes.TopTracksInfo}>
                    <p >artistNames</p>
                    <label style={{ fontSize: '12px' }}> genre</label>
                </div>
            </div>
        );
    }
}

export default TopTracks;