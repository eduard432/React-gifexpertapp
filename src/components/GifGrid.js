// import React, { useState, useEffect } from 'react'
import React from 'react'
import useFetchGifs from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'

// Helpers folder
// import getGifs from '../helpers/getGifs'

const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([])

    const { data:images, loading } = useFetchGifs(category)

    // useEffect(() => {
    //     getGifs(category)
    //         .then(setImages)
    // }, [category])



    return (
        <>
            <h3>{category}</h3>

            {loading && <p className="animate__animated animate__flash">Cargando...</p>}

            <div className="row">
                {
                    images.map(img => (
                        <div
                            className="col-md-4"
                            key={img.id}>
                            <GifGridItem {...img} />
                        </div>
                    ))
                }
            </div>


        </>
    )
}

export default GifGrid
