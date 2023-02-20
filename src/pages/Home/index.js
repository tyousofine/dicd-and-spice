import { useFetch } from './../../hooks/useFetch'
import React from 'react'

// styles
import './styles.scss'

//components
import RecipeList from '../../components/RecipeList';
import ThemeSelector from '../../components/ThemeSelector';



export default function Home() {
    const { data, isPending, error } = useFetch('http://localhost:3000/recipes');

    return (
        <div className='home'>

            {error && <div className='error'>{error}</div>}
            {isPending && <p className='pending'>Loading...</p>}
            {data && <RecipeList recipes={data} />}


        </div>
    )
}
