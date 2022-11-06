import React, { useState } from 'react'
import { Modal, Stack, Form, Button } from 'react-bootstrap'
import { useClass } from '../contexts/ClassContext'

export default function AddExistStudentModal({ show, classID, handleClose }) {

    const { students, deleteStudent } = useClass()


    let studentsFilter = students.filter(student => student.cardId !== classID)

    const [queryStudent, setQueryStudent] = useState(studentsFilter)

    const queryFunc = (e) => {
        setQueryStudent(studentsFilter.filter(student => student.name.includes(e.target.value)))

    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Form.Group className='mb-1 mt-1 text-light w-100'>
                    <Form.Control type='text' placeholder='Öğrenci İsmi' onKeyUp={queryFunc} />
                </Form.Group>
            </Modal.Header>

            <Modal.Body>

                {queryStudent?.map(student => {
                    return (
                        <Stack direction="horizontal" gap="3" className='m-3'>
                            <p>{student.name} </p>
                            <p>{student.surname}</p>
                            <Button className='ms-auto'>Ekle</Button>
                        </Stack>
                    )
                })}

            </Modal.Body>

        </Modal>
    )
}
