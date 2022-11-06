import React, { useState } from 'react'
import { Modal, Button, Stack, Accordion } from 'react-bootstrap'
import { useClass } from '../contexts/ClassContext';
import AddStudentModal from '../components/AddStudentModal'


export default function ShowStudentModal({ show, classID, handleClose }) {


    const { getStudent, getClassroom, deleteStudent } = useClass();
    const students = getStudent(classID);
    const classroom = getClassroom(classID);

    const [isShowAddStudent, setIsShowAddStudent] = useState()

    return (

        <>

            <Modal show={show} onHide={handleClose}>

                <Modal.Header closeButton>

                    <Modal.Title>
                        <Stack direction="horizontal" gap="3">
                            <h1> {classroom?.name} </h1>
                            <Button className='ms-auto' onClick={() => { setIsShowAddStudent(true) }}> Add Student</Button>
                        </Stack>
                    </Modal.Title>



                </Modal.Header>
                <Modal.Body>

                    {students?.map(student => {
                        return (
                            <Accordion>
                                <Accordion.Header>
                                    <Stack direction="horizontal" gap="3">
                                        <p>{student.name} </p>
                                        <p>{student.surname}</p>
                                    </Stack>
                                </Accordion.Header>
                                <Accordion.Body className="bg-danger">
                                    <p>İsim : {student.name.charAt(0).toUpperCase() + student.name.slice(1)} </p>
                                    <p>Soyisim : {student.surname.toUpperCase()}</p>
                                    <p>Kayıt Tarihi : {student.register}</p>
                                    <p>Ödeme Tarihi : {student.payment}</p>
                                    <Button onClick={() => { deleteStudent(student.id) }} >Sil</Button>
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


        </>
    )
}
