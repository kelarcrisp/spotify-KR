import React, { Component } from 'react'
import classes from './TopTrack.module.css'

const TopTrack = props => {
    return (
        <div>
            <ul>
                <li style={{ listStyleType: 'none' }}>
                    <div className={classes.TopTrackInfo}>
                        <img src={props.imageSrc} />
                        <div className={classes.TopTrackList}>
                            <div>{props.trackName}</div>
                            <div>{props.artistName}</div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};



export default TopTrack