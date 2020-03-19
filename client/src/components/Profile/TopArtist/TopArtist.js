import React, { PropTypes } from 'react';
import classes from './TopArtist.module.css';
const TopArtist = props => {
    return (
        <div>
            <ul>
                <li style={{ listStyleType: 'none' }}>
                    <div className={classes.TopArtistInfo}>
                        <img src={props.imageSrc} />
                        <div className={classes.ArtistNameGenre}>
                            <div>{props.artistName}</div>
                            <div>{props.artistGenre}</div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default TopArtist;