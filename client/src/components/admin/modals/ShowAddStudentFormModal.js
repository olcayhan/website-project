import React, { useEffect, useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { useClass } from '../../../contexts/ClassContext'
import Multiselect from 'multiselect-react-dropdown';
import DatePickerForm from '../DatePickerForm';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";



export default function ShowAddStudentFormModal({ show, handleClose }) {

    const { addStudent, classroom } = useClass()
    const [courses, setCourses] = useState([])
    const [selectCourse, setSelectCourse] = useState([])


    // courses kısmı için hem ismi hem tarihi gelmeli
    const [student, setStudent] = useState({
        name: '',
        surname: '',
        phone: '',
        email: '',
        courses: []
    })

    // useEffect(() => {
    //     setStudent({ ...student, courses: selectCourse })
    // }, [student])


    const handleSubmit = (e) => {
        e.preventDefault();


        addStudent(student)
        setCourses([])
        setSelectCourse([])
        handleClose();
    }
    console.log(student)
    return (
        <Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton closeVariant="white" className='bg-dark text-light'>
                <Modal.Title>Ögrenci Ekle</Modal.Title>
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
                            onSelect={(selectedItem) => { setCourses([...selectedItem]) }}
                            onRemove={(selectedItem) => setCourses([...selectedItem])}
                            options={classroom.map((item) => { return item.name })}
                            placeholder="Kursu Seçiniz"
                        />

                    </Form.Group>

                    {
                        courses?.map((item, key) => {
                            return (
                                <Form.Group className='mb-3' controlId='desc'  >
                                    <Form.Label>{item} Dersine Katılım Tarihi</Form.Label>
                                    <DatePicker selected={selectCourse[key]?.date} onChange={(date) => {
                                        setSelectCourse([...selectCourse, { class: item, date: date }]);

                                    }} />
                                </Form.Group>
                            )
                        })
                    }

                    <Form.Group className='d-flex justify-content-end'>
                        <Button disabled={student.name.length < 2 || student.surname.length < 1} style={{ backgroundColor: "#511281", border: "none" }} type="submit" onClick={() => setStudent({ ...student, courses: [...selectCourse] })}>Öğrenci Ekle</Button>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal >
    )
}