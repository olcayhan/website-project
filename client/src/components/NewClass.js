import React from 'react'
import { Button } from 'react-bootstrap'

export default function NewClass({ id, name, img, setClassID, setShowStudent }) {

    function showStudentModal() {
        setShowStudent(true)
        setClassID(id)
    }

    return (
        <div
            className='cardBackground'
            style={{ backgroundImage: "url(" + img + ")" }} >
            <span class="linearText">{name}</span>
            <Button onClick={showStudentModal} className="d-flex flex-column"> Show Students</Button>
        </div >
    )
}
