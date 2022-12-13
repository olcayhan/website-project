import React from 'react'
import { Modal, Stack } from 'react-bootstrap'
import { useClass } from '../../../contexts/ClassContext'


export default function ShowAllStudentsModal({ show, classID, handleClose }) {
    const { getClassroom } = useClass();
    let newStudents = getClassroom(classID)
    return (
        <Modal show={show} onHide={handleClose} size="m">

            <Modal.Header closeButton closeVariant="white" className='bg-dark text-light text-center'>

                <h4>Ogrenciler</h4>

            </Modal.Header>
            <Modal.Body className='bg-dark text-light'>
                {newStudents.map((student) => {
                    return (
                        <Stack direction='horizontal' gap="5" className='text-dark-500 bg-secondary mt-2 '>
                            <p>{student.date}</p>
                            <p>{student.name.charAt(0).toUpperCase() + student.name.slice(1)}</p>
                            <p>{student.surname.toUpperCase()}</p>
                        </Stack>
                    );

                })}
            </Modal.Body>

        </Modal>
    )
}
