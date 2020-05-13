import React, { Component } from 'react';
import Joke from './Joke';
import styled, { css } from 'styled-components';
import axios from 'axios';

const BoxShadow = css`box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1);`;

const StyledJokeList = styled.div`
    height: 80%;
    width: 80%;
    display: flex;
    flex-direction: row;
`;
const Sidebar = styled.div`
    background: #9575cd;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1), inset 0 0 25px #7e57c2;
    z-index: 2;
`;
const SidebarTitle = styled.h1`
    margin: 2rem;
    font-size: 4rem;
    color: white;
    font-weight: 300;
    letter-spacing: 0.6rem;

    span {
        font-weight: 700;
        letter-spacing: 0;
    }
`;
const SidebarImg = styled.img`
    width: 50%;
    border: 0.5rem solid #9575cd;
    border-radius: 50%;
    ${BoxShadow};
`;

const NewJokesBtn = styled.button`
    font-size: 2rem;
    height: 6rem;
    width: 50%;
    border-radius: 2rem;
    padding: 1rem 2rem;
    color: white;
    font-weight: 700;
    margin: 2rem;
    border: none;
    cursor: pointer;
    letter-spacing: 0.2rem;
    word-spacing: 0.5rem;
    outline: none;
    background: linear-gradient(135deg, #b3e5fc 50%, #f06292 50%);
    transition: 0.8s cubic-bezier(0.2, 1, 0.2, 1);
    ${BoxShadow};

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
    }
`;

const Jokes = styled.div`
    background: white;
    height: 90%;
    align-self: center;
    width: 70%;
    overflow: auto;
    ${BoxShadow};
`;

export default class JokeList extends Component {
    static defaultProps = {
        numJokesToGet: 10
    };
    constructor(props) {
        super(props);

        this.state = {
            jokes: [],
            loading: false
        };
        this.getJokes = this.getJokes.bind(this);
    }

    componentDidMount() {
        if (this.state.jokes.length === 0) this.getJokes();
    }

    async getJokes() {
        try {
            let newJokes = [];
            while (newJokes.length < this.props.numJokesToGet) {
                let newJoke = {};
                do {
                    const res = await axios.get('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });

                    newJoke = {
                        id: res.data.id,
                        joke: res.data.joke,
                        votes: 0
                    };
                } while (this.checkJoke(newJokes, newJoke));
                newJokes.push(newJoke);
            }
            this.setState((st) => ({ jokes: [ ...st.jokes, ...newJokes ] }));
        } catch (e) {
            alert(e);
        }
    }

    checkJoke(jokes, newJoke) {
        return jokes.some((joke) => joke.id === newJoke.id);
    }

    render() {
        const jokes = this.state.jokes.map((joke) => <Joke key={joke.id} id={joke.id} joke={joke.joke} />);
        return (
            <StyledJokeList>
                <Sidebar>
                    <SidebarTitle>
                        <span>Dad</span> Jokes
                    </SidebarTitle>
                    <SidebarImg src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' alt='' />
                    <NewJokesBtn>Fetch Jokes</NewJokesBtn>
                </Sidebar>
                <Jokes>{jokes}</Jokes>
            </StyledJokeList>
        );
    }
}
