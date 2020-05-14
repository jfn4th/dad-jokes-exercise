import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const StyledJoke = styled.div`
    padding: 1rem;
    border-bottom: 2px solid #eeeeee;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
`;
const JokeButtons = styled.div`
    display: flex;
    margin-right: 1rem;
    align-items: center;
    justify-content: center;
    width: 15%;
`;
const JokeVotes = styled.span`
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 50%;
    text-align: center;
    font-size: 20px;
    font-weight: 300;
    border: 3px solid red;
    box-shadow: 0 10px 38px rgba(0, 0, 0, 0.2), 0 10px 12px rgba(0, 0, 0, 0.1);
`;
const JokeText = styled.span`
    width: 75%;
    font-size: 1.2rem;
`;
const JokeSmiley = styled.div`
    font-size: 3rem;
    margin-left: auto;
    border-radius: 50%;
    box-shadow: 0 10px 38px rgba(0, 0, 0, 0.2), 0 10px 12px rgba(0, 0, 0, 0.1);
`;
const UpArrow = styled(FontAwesomeIcon).attrs(() => ({ icon: faArrowUp }))``;
const DownArrow = styled(FontAwesomeIcon).attrs(() => ({ icon: faArrowDown }))``;

export default class Joke extends Component {
    render() {
        return (
            <StyledJoke>
                <JokeButtons>
                    <UpArrow />
                    <JokeVotes>{this.props.votes}</JokeVotes>
                    <DownArrow />
                </JokeButtons>
                <JokeText>{this.props.joke}</JokeText>
                <JokeSmiley>
                    <i>image</i>
                </JokeSmiley>
            </StyledJoke>
        );
    }
}
