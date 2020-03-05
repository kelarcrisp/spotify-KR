import React, { Component } from 'react';
import NavBar from '../../containers/NavBar/NavBar';
import queryString from 'query-string';

// This will be the page that is initially directed to from the signIn page
class Profile extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let parsed = queryString.parse(this.props.location.pathname)
        console.log(parsed, 'PARSED URI')

        const accessToken = parsed.access_token
        console.log(parsed, 'query code')

        fetch('https://api.spotify.com/v1/me', {
            headers: {
                'Authorization': 'Bearer' + accessToken
            }
        }).then(response => response.json()).then(data => console.log(data))

    };

    render() {
        return (
            <div>
                <NavBar />
            </div>
        );
    }

}

export default Profile;