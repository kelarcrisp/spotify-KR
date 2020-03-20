import React, { Component } from 'react';
import axios from 'axios';
import queryString from 'query-string';
import classes from './TopTracks.module.css';
import TopTrack from '../TopTrack/TopTrack';
class TopTracks extends Component {
    state = {
        tracksInfo: [{
            trackId: null,
            albumsImages: null,
            artistsNames: null,
            tracksNames: null
        }]
    }


    componentDidMount() {
        console.log(this.props, "PROPS");
        const parsed = queryString.parse(this.props.parsedQuery)
        let holder = [];
        for (let i in parsed) {
            holder.push(parsed[i])
        }
        console.log('Parse TopTracks:', parsed);
        let accessToken = holder[0]
        let refreshToken = holder[1];

        axios.get('https://api.spotify.com/v1/me/top/tracks?limit=10&time_range=short_term', {
            headers: { 'Authorization': 'Bearer ' + accessToken }
        }).then(response => response).then(data => {
            this.setState({
                tracksInfo: data.data.items.map(track => ({
                    trackId: track.id,
                    albumsImages: track.album.images,
                    artistsNames: track.artists,
                    tracksNames: track.name
                }))
            })

            // console.log(data.data.items[0].album.images[0].url)
            // console.log(data.data.items[0].artists[0].name);
            // console.log(data.data.items[0].name)
            // console.log(data.data.items[0].id)


        }).catch(err => console.log("error toptracks", err));
    }


    render() { console.log(this.state.tracksInfo, "tracksinfoooo")
        let topTracks = this.state.tracksInfo[0].albumsImages ?
        this.state.tracksInfo.map((x, i) => {
            //console.log(x.artistsImages[0].url, 'x..images!!!');
            return <TopTrack
                key={x.id}
                artistGenre={x.artistsNames[0].name}
                artistName={x.tracksNames}
                imageSrc={x.albumsImages[0].url} />
        }) : 'not loaded yet!'
    
        return (
            <div className={classes.TopArtistsContainer} >
                <div className={classes.TopArtistsInfo}>
                    <p>Your Top 10 Artists!</p>
                    {topTracks.slice(0, 10)}
                </div>
            </div>
        );

        // return (
        //     <div className={classes.TopTracksContainer} >
        //         <header className={classes.TopTracksHeader}> Recent Top Tracks </header>
        //         <div className={classes.TopTracksImage}>
        //             <img alt='topArtistImage'></img>
        //         </div>
        //         <div className={classes.TopTracksInfo}>
        //             <p >artistNames</p>
        //             <label style={{ fontSize: '12px' }}> genre</label>
        //         </div>
        //     </div>
        // );
    }
}

export default TopTracks;