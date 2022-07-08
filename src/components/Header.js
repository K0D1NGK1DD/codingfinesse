import React, {Component} from 'react';

import Background from '../assets/images/urban-fog.jpg';

import '../styles/Header.css';

const portfolioStyle = {
    backgroundImage: `url( ${Background} )`,
    height: '80vh',
    backgroundSize: 'cover'
};

class Header extends Component {
    render() {
        return (

            <header style={portfolioStyle}>
                <h1>{this.props.title}</h1>
            </header>
        )
    };
};

export default Header;