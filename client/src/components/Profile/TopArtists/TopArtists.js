import React, { Component } from 'react';
import axios from 'axios';
import queryString from 'query-string'
import classes from './TopArtists.module.css';
import TopArtist from '../TopArtist/TopArtist';
class TopArtists extends Component {
    state = {
        artistsInfo: [{
            artistsId: null,
            artistsImages: null,
            artistsNames: null,
            artistsGenres: null
        }]
    }

    componentDidMount() {
        const parsed = queryString.parse(this.props.parsedQuery)
        let holder = [];
        for (let i in parsed) {
            holder.push(parsed[i])
        }

        let accessToken = holder[0]
        let refreshToken = holder[1];

        axios.get('https://api.spotify.com/v1/me/top/artists?limit=50&time_range=long_term', {
            headers: { 'Authorization': 'Bearer ' + accessToken }
        }).then(response => response).then(data => {
            console.log(data)
            this.setState({
                artistsInfo: data.data.items.map(artist => ({
                    artistsId: artist.id,
                    artistsImages: artist.images,
                    artistsNames: artist.name,
                    artistGenres: artist.genres
                }))
            })
            console.log(data)
            console.log(this.state.artistsInfo[0], 'artists info!!!')
            console.log(this.state.artistsInfo[0].artistGenres[0], 'artist genres in promise!!')
        })
    }

    //     return<img
    //                     key = {Math.random(0, 999)
    // }
    // src = { x.artistsImages[0].url } />

    render() {
        let topArtists = this.state.artistsInfo[0].artistsImages ?
            this.state.artistsInfo.map((x, i) => {
                //console.log(x.artistsImages[0].url, 'x..images!!!');
                return <TopArtist
                    artistGenre={x.artistGenres[0]}
                    artistName={x.artistsNames}
                    imageSrc={x.artistsImages[0].url} />
            }) : 'not loaded yet!'
        console.log(topArtists, 'top artist being rendered')
        return (
            <div className={classes.TopArtistsContainer} >
                <div className={classes.TopArtistsInfo}>
                    <p>Your Top 10 Artists!</p>
                    {topArtists.slice(0, 10)}
                </div>
            </div>
        );
    }
}

export default TopArtists;