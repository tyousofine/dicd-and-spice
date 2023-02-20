
import React from 'react'
import { useColor } from './../../hooks/useColor'
import darkModeToggle from './../../assets/images/darkModeToggle.svg';

// styles
import './styles.scss'


const themeColors = ['darkgrey', 'yellow', 'red', '#5aa96b']


export default function ThemeSelector() {

    const { changeColor, toggleMode, mode } = useColor();


    console.log(mode)

    return (
        <div className='theme-selector'>
            <div className="mode-toggle">
                <img
                    src={darkModeToggle}
                    onClick={toggleMode}
                    alt='dark/light toggle icon'
                    style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)' }}
                />
            </div>
            <div className='theme-buttons'>
                {themeColors.map((color) => (
                    <div key={color}
                        onClick={() => changeColor(color)}
                        style={{ background: color }}></div>))}
            </div>
        </div>
    )
}
