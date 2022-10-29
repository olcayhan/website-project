import React from 'react'

export default function NewClass({ id, name, img }) {

    return (
        <button
            className='cardBackground'
            style={{ backgroundImage: "url(" + img + ")" }} >

            {/* <span className="linearText"> {name} </span> */}

            <span class="linearText">{name}</span>

        </button >
    )
}
