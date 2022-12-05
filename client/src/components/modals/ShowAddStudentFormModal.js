import React, { useState } from 'react'
import { Button, Modal, Stack, Form } from 'react-bootstrap'
import DatePicker from 'react-date-picker'
import { addNewStudent } from '../../axios'
import { useClass } from '../../contexts/ClassContext'



export default function ShowAddStudentFormModal({ show, handleClose }) {

    const [student, setStudent] = useState({
        name: '',
        surname: '',
        courses: []
    })
    const { addStudent } = useClass()
    const handleSubmit = (e) => {
        e.preventDefault();
        addStudent(student)
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton closeVariant="white" className='bg-dark text-light'>
                <Modal.Title>Ogrenci Ekle</Modal.Title>
            </Modal.Header>


            <Modal.Body className="bg-dark text-light">
                <Form onSubmit={handleSubmit}>

                    <Form.Group className='mb-3' controlId='name'>
                        <Form.Label>İsim</Form.Label>
                        <Form.Control className='bg-dark text-light' type="text" onChange={(e) => setStudent({ ...student, name: e.target.value })} required />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='desc'>
                        <Form.Label>Soyisim</Form.Label>
                        <Form.Control className='bg-dark text-light' type="text" onChange={(e) => setStudent({ ...student, surname: e.target.value })} required />
                    </Form.Group>

                    {/*  <Form.Group className='mb-3' controlId='desc'>
                        <Form.Label>Aylık Ödeme Tarihi</Form.Label>
                        <DatePicker />
                    </Form.Group> */}

                    <Form.Group className='d-flex justify-content-end'>
                        <Button disabled={student.name.length < 2 || student.surname.length < 1} style={{ backgroundColor: "#511281", border: "none" }} type="submit">Öğrenci Ekle</Button>
                    </Form.Group>
                </Form>

            </Modal.Body>
        </Modal>
    )
}