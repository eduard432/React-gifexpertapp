import React from 'react'

const GifGridItem = ( { title, url} ) => {

    // console.log(id, title, url)

    return (
        <div className="card p-3 animate__animated animate__backInLeft" >
            <img src={url} alt={title} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title text-center">{title}</h5>
            </div>
        </div>
    )
}

export default GifGridItem
