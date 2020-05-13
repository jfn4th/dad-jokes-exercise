import React, { Component } from 'react';
import styled from 'styled-components';

const StyledJoke = styled.div`text-align: left;`;

export default class Joke extends Component {
    render() {
        return (
            <StyledJoke>
                <p>{this.props.joke}</p>
            </StyledJoke>
        );
    }
}
