import React, { Component } from 'react';
import classes from './SignIn.module.css'
class SignIn extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={classes.SignIn}>
                <div>Please sign in to get started!</div>
                <a href='http://localhost:8888'>
                    <button>click me!</button>
                </a>
            </div>
        );
    }
}


export default SignIn;