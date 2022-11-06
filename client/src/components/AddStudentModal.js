import React, { useRef } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { useClass } from '../contexts/ClassContext';


export default function AddStudent({ show, classID, handleClose }) {

    const nameRef = useRef();
    const surnameRef = useRef();
    const registerDateRef = useRef();
    const paymentRef = useRef();

    const { addStudent } = useClass();
    const handleSubmit = (e) => {
        e.preventDefault();
        handleClose();
    }

    function addNewStudent() {
        if (nameRef.current.value === "" || surnameRef.current.value === "" || registerDateRef.current.value === "" || paymentRef.current.value === "") return;

        addStudent(nameRef.current.value, surnameRef.current.value, registerDateRef.current.value, paymentRef.current.value, classID)
    }


    return (


        <Modal show={show} onHide={handleClose}>

            <Modal.Header closeButton>
                <Modal.Title>Yeni Öğrenci</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={handleSubmit}>

                    <Form.Group className='mb-3' controlId='name'>
                        <Form.Label>İsim</Form.Label>
                        <Form.Control ref={nameRef} type="text" required />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='desc'>
                        <Form.Label>Soyisim</Form.Label>
                        <Form.Control ref={surnameRef} type="text" required />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='desc'>
                        <Form.Label>Kayıt Olma Tarihi</Form.Label>
                        <Form.Control ref={registerDateRef} type="date" required />
                    </Form.Group>


                    <Form.Group className='mb-3' controlId='desc'>
                        <Form.Label>Aylık Ödeme Tarihi</Form.Label>
                        <Form.Control ref={paymentRef} type="date" required />
                    </Form.Group>

                    <Form.Group className='d-flex justify-content-end'>
                        <Button variant="primary" type="submit" onClick={addNewStudent}>Öğrenci Ekle</Button>
                    </Form.Group>
                </Form>

            </Modal.Body>
        </Modal>
    )
}
