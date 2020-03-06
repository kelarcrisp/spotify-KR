import React, { Component } from 'react';
import axios from 'axios';
import { queryStringFinder } from '../../../Spotify-utilites/utilities'
class TopArtists extends Component {


    // componentDidMount() {
    //     axios.get('https://api.spotify.com/v1/artist', {
    //         headers: { 'Authorization': 'Bearer ' + queryStringFinder() }
    //     }).then(response => response.json()).then(data => {
    //         console.log(data)
    //         this.setState({ displayName: data.display_name, followers: data.followers.total, images: data.images })
    //         console.log(this.state.followers, 'my followers!')
    //     })

    // }
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default TopArtists;