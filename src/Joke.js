import React, { Component } from 'react';

export default class Joke extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.joke}</h1>
            </div>
        );
    }
}
