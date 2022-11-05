import React, { useState } from 'react'
import { Modal, Button, Stack, Alert } from 'react-bootstrap'
import { useClass } from '../contexts/ClassContext';
import AddStudentModal from '../components/AddStudentModal'


export default function ShowStudentModal({ show, classID, handleClose }) {


    const { getStudent, getClassroom } = useClass();
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

                            <Stack direction="horizontal" gap="3">
                                <h2>{student.name} </h2>
                                <h2>{student.desc}</h2>
                                <Button
                                    className="ms-auto"
                                    onClick={() => alert("Gördün mü YARRRA !!!!!!!!!!!!!!!")}>Details</Button>
                            </Stack>

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
