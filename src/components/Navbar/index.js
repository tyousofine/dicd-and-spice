import React from 'react'
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';
import { useColor } from './../../hooks/useColor';

// styles
import './styles.scss'
import logo from './../../assets/images/logoGreen.jpg'



export default function Navbar() {

    const { color, changeColor } = useColor()

    // const randomizer = function getRandomColor() {
    //     var letters = '0123456789ABCDEF';
    //     var color = '#';
    //     for (var i = 0; i < 6; i++) {
    //         color += letters[Math.floor(Math.random() * 16)];
    //     }
    //     return color;
    // }


    return (
        <div className='navbar' style={{ background: color }}>
            {/* <nav onClick={() => changeColor(randomizer())}> */}
            <nav>
                <img src={logo} alt="logo" />
                <Link to='/'
                    className='brand'>
                    <h2>Dice & Spice</h2>
                </Link>
                <SearchBar />
                <Link to='create'>
                    Create Recipe
                </Link>
            </nav>
        </div>
    )
}
