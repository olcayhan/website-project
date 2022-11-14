import React, { useRef, useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { useClass } from '../contexts/ClassContext';
import DatePicker from 'react-date-picker'

export default function AddStudent({ show, classID, handleClose }) {

    const nameRef = useRef();
    const surnameRef = useRef();
    const [registerDate, setRegisterDate] = useState(new Date());
    const [paymentDate, setPaymentDate] = useState(new Date());
    const { addStudent } = useClass();



    const handleSubmit = (e) => {
        e.preventDefault();
        handleClose();
    }

    function addNewStudent() {
        if (nameRef.current.value === "" || surnameRef.current.value === "" || registerDate === null || paymentDate === null) return;

        let registerDay = registerDate.getDate()
        let registerMonth = registerDate.getMonth()
        let registerYear = registerDate.getFullYear()
        
        let paymentDay = registerDate.getDate()
        let paymentMonth = registerDate.getMonth()
        let paymentYear = registerDate.getFullYear()

        let registerDates = registerDay + "-" + registerMonth + "-" + registerYear
        let paymantDates = paymentDay + "-" + paymentMonth + "-" + paymentYear

        addStudent(nameRef.current.value, surnameRef.current.value, registerDates, paymantDates, classID)
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
                        <DatePicker onChange={setRegisterDate} value={registerDate} />
                    </Form.Group>


                    <Form.Group className='mb-3' controlId='desc'>
                        <Form.Label>Aylık Ödeme Tarihi</Form.Label>
                        <DatePicker onChange={setPaymentDate} value={paymentDate} />
                    </Form.Group>

                    <Form.Group className='d-flex justify-content-end'>
                        <Button variant="primary" type="submit" onClick={addNewStudent}>Öğrenci Ekle</Button>
                    </Form.Group>
                </Form>

            </Modal.Body>
        </Modal>
    )
}
