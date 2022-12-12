import React from 'react'
import { Modal } from 'react-bootstrap'
import { useClass } from '../../../contexts/ClassContext';



export default function ShowStudentModal({ show, studentID, handleClose }) {


    const { getStudent, deleteStudentById } = useClass();
    const student = getStudent(studentID);





    return (

        <>

            <Modal show={show} onHide={handleClose} size="m">

                <Modal.Header closeButton closeVariant="white" className='bg-dark text-light text-center'>

                    <h4> Öğrenci Detayları </h4>

                </Modal.Header>
                <Modal.Body className='bg-dark text-light'>
                    <p>Kayıt Tarihi : {student?.date}</p>
                    <p> İsim : {student?.name.toUpperCase()} </p>
                    <p>Soyisim : {student?.surname.toUpperCase()}</p>
                    <p>Telefon Numarası : {student?.phone}</p>
                    <p>E-mail : {student?.email}</p>
                    <p>Sifre : {student?.password}</p>
                    <p>Kayıtlı Kurslar :</p>

                    {
                        student?.courses.map((item) => {
                            return <p className="ms-5">{item.class}  -  {item.localDate}</p>
                        })
                    }
                    <div className='row'>
                        <button className='btn btn-danger col-3 ms-auto' onClick={() => {
                            const id = { id: student._id }
                            deleteStudentById(id)
                        }}>Öğrenciyi sil</button>
                    </div>


                </Modal.Body>

            </Modal>





        </>
    )
}
