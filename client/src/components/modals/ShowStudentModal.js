import React, { useState } from 'react'
import { Modal, Button, Stack, Accordion } from 'react-bootstrap'
import { useClass } from '../../contexts/ClassContext';
import ShowAddStudentFormModal from './ShowAddStudentFormModal'
import AddExistStudentModal from './AddExistStudentModal'


export default function ShowStudentModal({ show, classID, handleClose }) {


    const { getStudents, getClassroom, deleteStudent, setPayment } = useClass();
    const students = getStudents(classID);
    const classroom = getClassroom(classID);

    const [isShowAddStudent, setIsShowAddStudent] = useState()
    const [isShowAddExistStudent, setIsShowAddExistStudent] = useState()


    return (

        <>

            <Modal show={show} onHide={handleClose} size="lg">

                <Modal.Header closeButton closeVariant="white" className='bg-dark text-light'>

                    <Stack direction="horizontal" gap="3" className='m-3' >
                        <h1> {classroom?.name} </h1>
                        <Button className='bg-dark border-light' onClick={() => { setIsShowAddExistStudent(true) }}> Kayıtlı Öğrenciyi Ekle</Button>
                        <Button className=' bg-dark border-light' onClick={() => { setIsShowAddStudent(true) }}>Öğrenci Ekle</Button>
                    </Stack>



                </Modal.Header>
                <Modal.Body className='bg-dark'>

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

                                    {/* <p>Kayıt Tarihi : {student.register}</p>
                                    <p>Ödeme Tarihi : {student.payment}</p> */}
                                    <Button className='d-flex ms-auto' onClick={() => { deleteStudent(student.id) }} >Sil</Button>
                                </Accordion.Body>
                            </Accordion>

                        )
                    })}

                </Modal.Body>

            </Modal>


            <ShowAddStudentFormModal
                show={isShowAddStudent}
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
