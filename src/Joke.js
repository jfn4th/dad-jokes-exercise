import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const StyledJoke = styled.div`
    display: flex;
    border-bottom: 2px solid #eeeeee;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    padding: 1.5rem;
`;
const JokeButtons = styled.div`
    display: flex;
    margin-right: 1rem;
    align-items: center;
    justify-content: center;
    width: 15%;
`;
const voteBorderStyles = css`
    border-color: ${(props) =>
        props.votes >= 15
            ? `#4CAF50`
            : props.votes >= 12
              ? `#8BC34A`
              : props.votes >= 9
                ? `#CDDC39`
                : props.votes >= 6 ? `#FFEB3B` : props.votes >= 3 ? `#FFC107` : props.votes >= 0 ? `#FF9800` : `#F44336`};
    border-style: solid;
    border-width: 3px;
`;

const JokeVotes = styled.span`
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 50%;
    text-align: center;
    font-size: 20px;
    font-weight: 300;
    box-shadow: 0 10px 38px rgba(0, 0, 0, 0.2), 0 10px 12px rgba(0, 0, 0, 0.1);
    ${voteBorderStyles};
`;
const JokeText = styled.div`
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
    font-size: 1.5em;
    margin: 10px;
    cursor: pointer;
`;
const UpArrow = styled(FontAwesomeIcon).attrs((props) => ({ icon: faArrowUp }))`
${arrowStyles}
`;
const DownArrow = styled(FontAwesomeIcon).attrs((props) => ({ icon: faArrowDown }))`
${arrowStyles}
`;

const Smiley = styled.i``;

export default class Joke extends Component {
    constructor(props) {
        super(props);
        this.upVote = this.upVote.bind(this);
        this.downVote = this.downVote.bind(this);
        this.getEmoji = this.getEmoji.bind(this);
    }

    upVote(evt) {
        this.props.assessVote(this.props.id, 1);
    }

    downVote(evt) {
        this.props.assessVote(this.props.id, -1);
    }
    getEmoji() {
        return this.props.votes >= 15
            ? `em em-rolling_on_the_floor_laughing`
            : this.props.votes >= 12
              ? `em em-laughing`
              : this.props.votes >= 9
                ? `em em-smiley`
                : this.props.votes >= 6
                  ? `em em-slightly_smiling_face`
                  : this.props.votes >= 3 ? `em em-neutral_face` : this.props.votes >= 0 ? `em em-confused` : `em em-angry`;
    }

    render() {
        const { votes, joke } = this.props;
        return (
            <StyledJoke>
                <JokeButtons>
                    <UpArrow onClick={this.upVote} />
                    <JokeVotes votes={votes}>{votes} </JokeVotes>
                    <DownArrow onClick={this.downVote} />
                </JokeButtons>
                <JokeText>{joke}</JokeText>
                <JokeSmiley>
                    <Smiley className={this.getEmoji()} />
                </JokeSmiley>
            </StyledJoke>
        );
    }
}
