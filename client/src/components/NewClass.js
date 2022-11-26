import React from 'react'

export default function NewClass({ id, name, img, setClassID, setShowStudent }) {

    function showStudentModal() {
        setShowStudent(true)
        setClassID(id)
    }
    // cardBackground
    return (
        <button onClick={showStudentModal} className='cardBackground  d-flex flex-column justify-content-between   '
            style={{ backgroundImage: "url(" + img + ")" }}
        >

            <p class="linearText">{name}</p>



        </button >
    )
}
