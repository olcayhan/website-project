import React, { useRef } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { useClass } from '../contexts/ClassContext'

export default function AddClassModal({ show, handleClose }) {

    const nameRef = useRef()
    const descRef = useRef()
    const { addClassroom } = useClass()


    function handleSubmit(e) {
        e.preventDefault();
        addClassroom(
            {
                name: nameRef.current.value,
                description: descRef.current.value
            }
        )
        handleClose()
    }
    return (

        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title> Sınıf Ekle</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className='mb-3' controlId='name'>
                        <Form.Label>Sınıf Adı</Form.Label>
                        <Form.Control ref={nameRef} type="text" required />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='desc'>
                        <Form.Label>Açıklama</Form.Label>
                        <Form.Control ref={descRef} type="text" required />
                    </Form.Group>

                    <div className='d-flex justify-content-end'>
                        <Button variant="primary" type="submit">Ekle</Button>
                    </div>

                </Modal.Body>
            </Form>
        </Modal>

    )
}
