import { createContext, useReducer } from "react";


// this is the object created with createContex
// we will use this to pass the properties to other components
export const ColorContext = createContext();

const colorReducer = (state, action) => {
    switch (action.type) {

        case 'CHANGE_COLOR':
            return { ...state, color: action.payload }
        case 'CHANGE_MODE':
            return { ...state, mode: action.payload }
        default: return state
    }

}

export function ColorProvider({ children }) {
    const [state, dispatch] = useReducer(colorReducer, {
        color: '#5aa96b',
        mode: 'light'
    });

    const changeColor = (color) => {
        dispatch({ type: 'CHANGE_COLOR', payload: color })
    }

    const changeMode = (mode) => {
        dispatch({ type: 'CHANGE_MODE', payload: mode })
    }

    const toggleMode = () => {
        changeMode(state.mode === 'dark' ? 'light' : 'dark')
    }
    return (

        // this will wrap our app in index.js
        <ColorContext.Provider value={{ ...state, changeColor, toggleMode }} >
            {children}
        </ColorContext.Provider>
    )

}