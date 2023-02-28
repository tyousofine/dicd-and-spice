import React from 'react';
import { Link } from 'react-router-dom';
import { useColor } from './../../hooks/useColor';
import { VscTrash } from "react-icons/vsc";
import { db } from '../../firebase/config';

// styles
import './styles.scss';


export default function RecipeList({ recipes }) {

    const { mode } = useColor();

    const handleClick = (id) => {
        db.collection('recipes').doc(id).delete()
    }

    return (
        <>
            {recipes.length === 0 &&
                <div className='error'>No recipes found...</div>
            }
            <div className='recipe-list'>
                {recipes.map((recipe) => (
                    <div key={recipe.id} className={`recipe-card ${mode}`}>
                        <h3>{recipe.title}</h3>
                        <p>{recipe.cookingTime} to make.</p>
                        <div>{recipe.method.substring(0, 100)}...</div>
                        <div className="btn-container">
                            <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
                            <button
                                className='delete-btn'
                                onClick={() => handleClick(recipe.id)}
                            ><p><VscTrash size={25} /></p>
                            </button>
                        </div>
                    </div>
                ))}

            </div>
        </>
    )
}
