import React, { Component } from 'react';
import Joke from './Joke';
import styled from 'styled-components';
import axios from 'axios';

const StyledJokeList = styled.div``;

export default class JokeList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            jokes: []
        };
    }

    async componentDidMount() {
        if (this.state.jokes.length === 0) {
            let jokes = [];
            let newJoke;
            for (let i = 0; i < 10; i++) {
                do {
                    const res = await axios.get('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
                    newJoke = {
                        id: res.data.id,
                        joke: res.data.joke
                    };
                } while (jokes.includes(newJoke));
                jokes = [ ...jokes, newJoke ];
            }
            this.setState((st) => ({ jokes: [ ...st.jokes, ...jokes ] }));
        }
    }

    render() {
        const jokes = this.state.jokes.map((joke) => <Joke key={joke.id} id={joke.id} joke={joke.joke} />);
        return <StyledJokeList>{jokes}</StyledJokeList>;
    }
}
