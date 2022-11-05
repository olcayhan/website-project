import React, { useRef } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { useClass } from '../contexts/ClassContext';


export default function AddStudent({ show, classID, handleClose }) {

    const nameRef = useRef();
    const descRef = useRef();


    const { addStudent } = useClass();
    const handleSubmit = (e) => {
        e.preventDefault();
        handleClose();
    }

    function addNewStudent() {
        addStudent(nameRef.current.value, descRef.current.value, classID)
    }


    return (


        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title> New Card</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className='mb-3' controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control ref={nameRef} type="text" required />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='desc'>
                        <Form.Label>Description</Form.Label>
                        <Form.Control ref={descRef} type="text" required />
                    </Form.Group>

                    <div className='d-flex justify-content-end'>
                        <Button variant="primary" type="submit" onClick={addNewStudent}>Add</Button>

                    </div>

                </Modal.Body>
            </Form>
        </Modal>
    )
}
