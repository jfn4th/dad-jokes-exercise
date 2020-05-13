import React, { Component } from 'react';
import Joke from './Joke';
import styled from 'styled-components';
import axios from 'axios';

const StyledJokeList = styled.div`
    /* margin: 0 auto;d */
    display: flex;
    flex-direction: row;
    /* flex-wrap: wrap; */
    justify-content: center;
    align-items: center;
    width: 80vw;
    height: 80vh;
`;
const Sidebar = styled.div`
    display: flex;
    align-items: center;
    background: #8a65cc;
    min-height: 100%;
    min-width: 30%;
`;

const Jokes = styled.div`
    background: white;
    height: 90%;
    flex-grow: 3;
`;

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
        return (
            <StyledJokeList>
                <Sidebar>
                    <h1>Dad Jokes</h1>
                </Sidebar>
                <Jokes>{jokes}</Jokes>
            </StyledJokeList>
        );
    }
}
