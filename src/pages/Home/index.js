
import { projectFirestore } from './../../firebase/config';
import React, { useEffect, useState } from 'react'

// styles
import './styles.scss'

//components
import RecipeList from '../../components/RecipeList';



export default function Home() {
    const [data, setData] = useState('');
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setIsPending(true);

        const unsub = projectFirestore.collection('recipes').onSnapshot((snapshot) => {

            if (snapshot.empty) {
                setError("No recipes to load")
                setIsPending(false)

            } else {
                let results = [];
                snapshot.docs.forEach(doc => {
                    results.push({ id: doc.id, ...doc.data() })
                })
                setData(results);
                setIsPending(false);
            }
        }, (err) => {
            setError(err.message);
            setIsPending(false)
        })


    }, [])


    return (
        <div className='home'>

            {error && <div className='error'>{error}</div>}
            {isPending && <p className='pending'>Loading...</p>}
            {data && <RecipeList recipes={data} />}


        </div>
    )
}
