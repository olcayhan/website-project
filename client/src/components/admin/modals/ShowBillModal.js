import React from 'react'
import { Button, Modal, Stack } from 'react-bootstrap'
import { useClass } from '../../../contexts/ClassContext'

export default function ShowBillModal({ show, studentID, handleClose }) {

    const { getStudent } = useClass()
    // const student = getStudent(studentID)
    // let today = new Date()
    
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton closeVariant='white' className='bg-dark text-light'>
                <Modal.Title>Faturalar</Modal.Title>
            </Modal.Header>


            <Modal.Body className='bg-dark text-light'>

                <Stack direction="horizontal">
                    <p>10.10.2002</p>
                    <Button className="ms-auto">Öde</Button>
                </Stack>



            </Modal.Body>
        </Modal>
    )
}