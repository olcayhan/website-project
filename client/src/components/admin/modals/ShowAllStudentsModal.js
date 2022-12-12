import React from 'react'
import { Modal } from 'react-bootstrap'
import { useClass } from '../../../contexts/ClassContext'


export default function ShowAllStudentsModal({ show, classID, handleClose }) {
    const { getClassroom } = useClass();
    let newStudents = getClassroom(classID)
    console.log(newStudents)
    return (
        <Modal show={show} onHide={handleClose} size="m">

            <Modal.Header closeButton closeVariant="white" className='bg-dark text-light text-center'>

                <h4>Ogrenciler</h4>

            </Modal.Header>
            <Modal.Body className='bg-dark text-light'>
                <tbody>
                    {newStudents.map((student) => {
                        return (
                            <tr className='text-dark-500  '>
                                <td>{student.date}</td>
                                <td>{student.name.charAt(0).toUpperCase() + student.name.slice(1)}</td>
                                <td>{student.surname.toUpperCase()}</td>
                                <td>
                                    <button className='btn btn-success px-5' onClick={() => {
                                    }}>  <i class="fas fa-duotone fa-receipt fa-2x text-light"></i> </button>
                                </td>
                                <td>
                                    <button className='btn btn-warning font-weight-bold px-3' onClick={() => {
                                    }}>  <i class="fa-sharp fa-solid fa-circle-info fa-2x text-light"></i> </button>
                                </td>
                            </tr>
                        );

                    })}
                </tbody>
            </Modal.Body>

        </Modal>
    )
}
