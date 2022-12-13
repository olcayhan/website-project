import React from 'react'
import { Button, Modal, Stack } from 'react-bootstrap'
import { useClass } from '../../../contexts/ClassContext'

export default function ShowBillModal({ show, studentID, handleClose }) {

    const { getStudent, payBill } = useClass()
    const student = getStudent(studentID)
    console.log(student)

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton closeVariant='white' className='bg-dark text-light'>
                <Modal.Title>Faturalar</Modal.Title>
            </Modal.Header>


            <Modal.Body className='bg-dark text-light'>
                {
                    student?.courses.map((item) => {
                        return (
                            <Stack direction="horizontal">
                                <p>{item.localDate} - {item.class}</p>
                                <Button className="ms-auto"
                                    onClick={() => { payBill(studentID) }}
                                    style={item.isPaid ? { backgroundColor: "red" } : { backgroundColor: "blue" }}>
                                    {item.isPaid ? "Ödenmiş" : "Öde"}
                                </Button>
                            </Stack>
                        )
                    })
                }

            </Modal.Body>
        </Modal>
    )
}