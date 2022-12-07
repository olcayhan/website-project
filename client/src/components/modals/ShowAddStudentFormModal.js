import React, { useEffect, useState } from 'react'
import { Button, Modal, Form, ModalHeader } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import { useClass } from '../../contexts/ClassContext'
import Multiselect from 'multiselect-react-dropdown';

import "react-datepicker/dist/react-datepicker.css";


export default function ShowAddStudentFormModal({ show, handleClose }) {

    const { addStudent, classroom } = useClass()
    const [startDate, setStartDate] = useState(new Date());
    const [dateModal, setDateModal] = useState()
    

    const [student, setStudent] = useState({
        name: '',
        surname: '',
        courses: []
    })

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

                    <Form.Group className='mb-3' controlId='desc'>
                        <Form.Label>Telefon</Form.Label>
                        <Form.Control className='bg-dark text-light' type="text" onChange={(e) => setStudent({ ...student, number: e.target.value })} required />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='desc'>
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control className='bg-dark text-light' type="mail" onChange={(e) => setStudent({ ...student, email: e.target.value })} required />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='desc'>
                        <Form.Label>Kurslar</Form.Label>
                        <Multiselect
                            className='text-dark'
                            isObject={false}
                            onSelect={(selectedItem) => {
                                console.log(selectedItem)
                              
                                // setDateModal(true)
                            }}
                            options={
                                classroom.map(
                                    (item) => {
                                        return item.name
                                    }
                                )}
                            placeholder="Kursu Seçiniz"

                        />



                    </Form.Group>

                    <Form.Group className='d-flex justify-content-end'>
                        <Button disabled={student.name.length < 2 || student.surname.length < 1} style={{ backgroundColor: "#511281", border: "none" }} type="submit">Öğrenci Ekle</Button>
                    </Form.Group>
                </Form>

            </Modal.Body>




            <Modal show={dateModal} onHide={false} className="mt-5">
                <ModalHeader closeButton closeVariant="white" className='bg-dark text-light'> Tarih Giriniz</ModalHeader>
                <Modal.Body className="bg-dark text-light">,
                    <p></p>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                </Modal.Body>
            </Modal>
        </Modal>
    )
}