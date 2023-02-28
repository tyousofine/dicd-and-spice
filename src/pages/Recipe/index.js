import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { useColor } from '../../hooks/useColor';


// styles
import './styles.scss'
import { db } from '../../firebase/config';
import { collection, onSnapshot } from 'firebase/firestore'

import React, { useEffect, useState } from 'react'

export default function Recipe() {

    const [recipe, setRecipe] = useState('');
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState('');

    const { id } = useParams();
    const { mode } = useColor();

    useEffect((id) => {
        setIsPending(true);
        const ref = collection(db, 'recipes');

        const unsub = onSnapshot(ref, (snapshot) => {
            let results = [];
            snapshot.docs.forEach((doc) => {
                results.push({ id: doc.id, ...doc.data() })
            })
            if (snapshot.exists) {
                setIsPending(false);
                setRecipe(snapshot.data());
            } else {
                setIsPending(false);
                setError("Could not find that recipe")
            }
        })
        return () => unsub();

    }, [id]);


    const handleClick = () => {
        db.collection('recipes').doc(id).update({
            title: 'something different'
        })
    }

    return (
        <div className={`recipe ${mode} `}>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {recipe && (<>
                <h2 className='page-title'>{recipe.title}</h2>
                <p>Takes {recipe.cookingTime} to cook.</p>
                <ul>{recipe.ingredients.map((item) =>
                (<li key={item}>
                    {item}
                </li>))}
                </ul>
                <p className='method'>{recipe.method}</p>
                <button
                    onClick={handleClick}
                >update me
                </button>
            </>)}
        </div>
    )
}
