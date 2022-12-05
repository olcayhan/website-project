import React, { useRef, useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { useClass } from '../../contexts/ClassContext';
import DatePicker from 'react-date-picker'

export default function AddStudent({ show, classID, handleClose }) {


    const [registerDate, setRegisterDate] = useState(new Date());
    const [paymentDate, setPaymentDate] = useState(new Date());
    const { addStudent } = useClass();

    const [student, setStudent] = useState({
        name: '',
        surname: '',
        courses: []
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        handleClose();
    }

    function addNewStudent() {

        addStudent(student)
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
                        <Form.Control type="text" onChange={(e) => setStudent({ ...student, name: e.target.value })} required />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='desc'>
                        <Form.Label>Soyisim</Form.Label>
                        <Form.Control type="text" onChange={(e) => setStudent({ ...student, surname: e.target.value })} required />
                    </Form.Group>

                    {/* <Form.Group className='mb-3' controlId='desc'>
                        <Form.Label>Kayıt Olma Tarihi</Form.Label>
                        <DatePicker onChange={setRegisterDate} value={registerDate} />
                    </Form.Group> */}


                    {/* <Form.Group className='mb-3' controlId='desc'>
                        <Form.Label>Aylık Ödeme Tarihi</Form.Label>
                        <DatePicker onChange={setPaymentDate} value={paymentDate} />
                    </Form.Group> */}

                    <Form.Group className='d-flex justify-content-end'>
                        <Button variant="primary" type="submit" onClick={addNewStudent}>Öğrenci Ekle</Button>
                    </Form.Group>
                </Form>

            </Modal.Body>
        </Modal>
    )
}
