
import React, { useEffect, useState } from 'react'
// use this if you are not gonna use the hook
import { db } from './../../firebase/config';
import { collection, onSnapshot } from 'firebase/firestore'
// styles
import './styles.scss'

//components
import RecipeList from '../../components/RecipeList';
import { useCollection } from '../../hooks/useCollection';



export default function Home() {
    // const [data, setData] = useState('');
    // use use Collection hook like this: 
    const { documents: data } = useCollection('recipes')
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState('');

    // or do something like this:
    // useEffect(() => {
    //     setIsPending(true);

    //     const ref = collection(db, 'recipes');
    //     const unsub = onSnapshot(ref, (snapshot) => {
    //         let results = [];
    //         snapshot.docs.forEach((doc => {
    //             results.push({ id: doc.id, ...doc.data() })

    //         }))
    //         setData(results)
    //         setIsPending(false);
    //     })
    //     return () => unsub()
    // }, [])


    return (
        <div className='home'>

            {error && <div className='error'>{error}</div>}
            {isPending && <p className='pending'>Loading...</p>}
            {data && <RecipeList recipes={data} />}


        </div>
    )
}
