import React, { useState } from 'react'

import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {

    // const category = ['One Punch', 'Dragon Ball', 'Samurai X']

    const [categories, setCategories] = useState(['Rick and Morty'])

    // const handleAdd = () => {
    //     // setCategories( [...categories, 'Dark'] )
    //     setCategories(e => [...e, 'Dark'])
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />

            <AddCategory setCategories={setCategories} />

            <ol>
                {
                    categories.map(category => (
                        <GifGrid category={category} key={category} />
                    ))
                }
            </ol>

        </>
    )
}

export default GifExpertApp
