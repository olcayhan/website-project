import React, { useState } from 'react'
import { Modal, Button, Stack, Accordion } from 'react-bootstrap'
import { useClass } from '../contexts/ClassContext';
import AddStudentModal from '../components/AddStudentModal'
import AddExistStudentModal from '../components/AddExistStudentModal'


export default function ShowStudentModal({ show, classID, handleClose }) {


    const { getStudent, getClassroom, deleteStudent } = useClass();
    const students = getStudent(classID);
    const classroom = getClassroom(classID);

    const [isShowAddStudent, setIsShowAddStudent] = useState()
    const [isShowAddExistStudent, setIsShowAddExistStudent] = useState()


    return (

        <>

            <Modal show={show} onHide={handleClose}>

                <Modal.Header closeButton>

                    <Stack direction="horizontal" gap="3" >
                        <h1> {classroom?.name} </h1>

                        <Button className='ms-auto' onClick={() => { setIsShowAddExistStudent(true) }}> Var Olan Öğrenciyi Ekle</Button>

                        <Button className='ms-auto' onClick={() => { setIsShowAddStudent(true) }}> Yeni Öğrenci Ekle</Button>
                    </Stack>



                </Modal.Header>
                <Modal.Body>

                    {students?.map(student => {
                        return (
                            <Accordion>
                                <Accordion.Header>
                                    <Stack direction="horizontal" gap="3">
                                        <p>{student.name.charAt(0).toUpperCase() + student.name.slice(1)} </p>
                                        <p>{student.surname.charAt(0).toUpperCase() + student.surname.slice(1)}</p>
                                    </Stack>
                                </Accordion.Header>
                                <Accordion.Body className="bg-danger">
                                    <p>İsim : {student.name.charAt(0).toUpperCase() + student.name.slice(1)} </p>
                                    <p>Soyisim : {student.surname.toUpperCase()}</p>
                                    <p>Kayıt Tarihi : {student.register}</p>
                                    <p>Ödeme Tarihi : {student.payment}</p>
                                    <Button className='d-flex ms-auto' onClick={() => { deleteStudent(student.id) }} >Sil</Button>
                                </Accordion.Body>
                            </Accordion>

                        )
                    })}

                </Modal.Body>

            </Modal>


            <AddStudentModal
                show={isShowAddStudent}
                classID={classID}
                handleClose={() => setIsShowAddStudent(false)}
            />

            <AddExistStudentModal
                show={isShowAddExistStudent}
                classID={classID}
                handleClose={() => setIsShowAddExistStudent(false)}
            />


        </>
    )
}
