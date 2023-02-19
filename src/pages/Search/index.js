import React from 'react'
import { useLocation } from 'react-router-dom';
import RecipeList from '../../components/RecipeList';
import { useFetch } from '../../hooks/useFetch';

export default function Search() {
    const qString = useLocation().search
    const qParams = new URLSearchParams(qString);
    const query = qParams.get('q');

    const url = 'http://localhost:3000/recipes?q=' + query;
    const { error, isPending, data } = useFetch(url);

    return (
        <div>
            <h2 className='page-title'>Recipes including "{query}"</h2>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {data && <RecipeList recipes={data} />}

        </div>
    )
}