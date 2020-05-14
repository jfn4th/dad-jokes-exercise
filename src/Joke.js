import React, { Component } from 'react';
import styled, { css } from 'styled-components';
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
const arrowStyles = css`
    color: #afbdc5;
    font-size: 2rem;
    margin: 1rem;
`;
const UpArrow = styled(FontAwesomeIcon).attrs((props) => ({ icon: faArrowUp }))`
${arrowStyles}
`;
const DownArrow = styled(FontAwesomeIcon).attrs((props) => ({ icon: faArrowDown }))`
${arrowStyles}
`;

export default class Joke extends Component {
    constructor(props) {
        super(props);
        this.upVote = this.upVote.bind(this);
        this.downVote = this.downVote.bind(this);
    }

    upVote(evt) {
        this.props.assessVote(this.props.id, 1);
    }

    downVote(evt) {
        this.props.assessVote(this.props.id, -1);
    }

    render() {
        return (
            <StyledJoke>
                <JokeButtons>
                    <UpArrow onClick={this.upVote} />
                    <JokeVotes>{this.props.votes}</JokeVotes>
                    <DownArrow onClick={this.downVote} />
                </JokeButtons>
                <JokeText>{this.props.joke}</JokeText>
                <JokeSmiley>
                    <i>image</i>
                </JokeSmiley>
            </StyledJoke>
        );
    }
}
