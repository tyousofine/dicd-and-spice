import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase/config'
import { collection, addDoc } from 'firebase/firestore'

//styles
import './styles.scss';


export default function Create() {
    const [title, setTitle] = useState('');
    const [method, setMethod] = useState('');
    const [cookingTime, setCookingTime] = useState('');
    const [newIngredient, setNewIngredient] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const ingredientInput = useRef();


    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()


        const ref = collection(db, 'recipes')

        await addDoc(ref, { title, ingredients, method, cookingTime: cookingTime + ' minutes' })
        // try {
        //     await db.collection('recipes').add(doc);
        //     navigate('/')
        // } catch (err) {
        //     console.log(err)
        // }
    }

    const handleAddIngredient = (e) => {
        e.preventDefault()
        const ing = newIngredient.trim()

        if (ing && !ingredients.includes(ing)) {
            setIngredients(prevIngredients => [...prevIngredients, newIngredient])

        }
        ingredientInput.current.focus()
        setNewIngredient('')
    }
    return (
        <div className='create'>
            <h2 className='pate-title'>New Recipe</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    <span>Recipe Title:</span>
                    <input type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </label>

                <label>
                    <span>Recipe Ingredients:</span>
                    <div className="ingredients">
                        <input type="text"
                            value={newIngredient}
                            onChange={(e) => setNewIngredient(e.target.value)}
                            ref={ingredientInput}
                        />
                        <button
                            className='btn'
                            onClick={handleAddIngredient}>add</button>
                    </div>
                    <p>Current ingredients: {ingredients.map((e) => <em key={e}>{e}. </em>)}</p>

                </label>
                <label>
                    <span>Recipe Method:</span>
                    <textarea
                        value={method}
                        onChange={(e) => setMethod(e.target.value)}
                        required
                    />
                </label>
                <label>
                    <span>Cooking Time:</span>
                    <input type="number"
                        value={cookingTime}
                        onChange={(e) => setCookingTime(e.target.value)}
                        required
                    />
                </label>
                <button className='btn'>submit</button>

            </form>

        </div>
    )
}
