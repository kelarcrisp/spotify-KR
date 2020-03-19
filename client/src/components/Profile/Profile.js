import React, { Component } from 'react';
import NavBar from '../../containers/NavBar/NavBar';
import queryString from 'query-string'
import { Button, Icon } from "@blueprintjs/core";
import classes from './Profile.module.css';
import TopArtists from '../Profile/TopArtists/TopArtists'
import TopTracks from '../Profile/TopTracks/TopTracks';
// This will be the page that is initially directed to from the signIn page
class Profile extends Component {
    state = {
        displayName: null,
        followers: null,
        images: null,
        user: null,
        followedArtists: null,
        playlists: null,
        topArtists: null,
        topTracks: null
    }



    componentDidMount() {
        const parsed = queryString.parse(this.props.location.pathname)
        let holder = [];
        for (let i in parsed) {
            holder.push(parsed[i])
        }
        /// -------- accessToken --------
        let accessToken = holder[0]
        let refreshToken = holder[1];
        console.log(accessToken)
        console.log(refreshToken)
        fetch('https://api.spotify.com/v1/me', {
            headers: { 'Authorization': 'Bearer ' + accessToken }
        }).then(response => response.json()).then(data => {
            console.log(data)
            this.setState({ displayName: data.display_name, followers: data.followers.total, images: data.images })
            console.log(this.state.followers, 'my followers!')
        })
            .then(err => console.log(err))
    };

    render() {
        // next task is to make all of this under css grid!!
        return (
            <React.Fragment>
                <div className={classes.NavBar}>
                    <NavBar />
                </div>
                <div className={classes.ProfileDetailsContainer}>
                    <div className={classes.UserDetails}>
                        {this.state.images ? <Icon icon="user" iconSize={100} /> : <Icon icon="user" iconSize={100} />}
                        <div>{this.state.followers}<br></br>followers </div>
                        <div> {this.state.displayName} <br></br> display name </div>
                        <div> playlist </div>
                    </div>
                    <div className={classes.TopArtists}>
                        <TopArtists parsedQuery={this.props.location.pathname} />
                    </div>
                    {/* the top artists component will go here  */}
                    <div className={classes.TopSongs}>
                        <TopTracks />
                    </div>
                </div>

            </React.Fragment >
        );
    }

}

export default Profile;