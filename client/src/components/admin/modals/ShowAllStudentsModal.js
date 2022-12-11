import React from 'react'
import { Modal } from 'react-bootstrap'


export default function ShowAllStudentsModal({ show, classID, handleClose }) {
    console.log(classID)

    return (
        <Modal show={show} onHide={handleClose} size="m">

            <Modal.Header closeButton closeVariant="white" className='bg-dark text-light text-center'>

                <h4> </h4>

            </Modal.Header>
            <Modal.Body className='bg-dark text-light'>

            </Modal.Body>

        </Modal>
    )
}
