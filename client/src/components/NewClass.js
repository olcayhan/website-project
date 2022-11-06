import React from 'react'
import { Button } from 'react-bootstrap'

export default function NewClass({ id, name, img, setClassID, setShowStudent }) {

    function showStudentModal() {
        setShowStudent(true)
        setClassID(id)
    }
    // cardBackground
    return (
        <div className='cardBackground  d-flex flex-column justify-content-between   '
            style={{ backgroundImage: "url(" + img + ")" }}
        >






            <p class=" linearText">{name}</p>

            <Button onClick={showStudentModal} className="btn rounded-y"> Show Students</Button>


        </div >
    )
}
