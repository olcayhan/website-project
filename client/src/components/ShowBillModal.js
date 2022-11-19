import React from 'react'
import { Button, Modal, Stack } from 'react-bootstrap'
import { useClass } from '../contexts/ClassContext'

export default function ShowBillModal({ show, studentID, handleClose }) {

    const { getStudent } = useClass()
    const student = getStudent(studentID)


    let today = new Date()
    
    
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Faturalar</Modal.Title>
            </Modal.Header>


            <Modal.Body>

                <Stack direction="horizontal">
                    <p>{student?.payment}</p>
                    <Button className="ms-auto">Öde</Button>
                </Stack>



            </Modal.Body>
        </Modal>
    )
}