import React from 'react';
import { Link } from 'react-router-dom';

// styles
import './styles.scss';


export default function RecipeList({ recipes }) {
    return (
        <>
            {recipes.length === 0 &&
                <div className='error'>No recipes found...</div>
            }
            <div className='recipe-list'>
                {recipes.map((recipe) => (
                    <div key={recipe.id} className='recipe-card'>
                        <h3>{recipe.title}</h3>
                        <p>{recipe.cookingTime} to make.</p>
                        <div>{recipe.method.substring(0, 100)}...</div>
                        <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
                    </div>
                ))}

            </div>
        </>
    )
}
