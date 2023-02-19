import React from 'react'
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';

// styles
import './styles.scss'
import logo from './../../assets/images/logoGreen.jpg'


export default function Navbar() {


    return (
        <div className='navbar'>
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
