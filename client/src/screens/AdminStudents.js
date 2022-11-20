import React, { useState, useEffect } from 'react'
import { Button, Card, Form, Row, Stack } from 'react-bootstrap'
import ShowBillModal from "../components/ShowBillModal"
import ShowAddStudentFormModal from "../components/ShowAddStudentFormModal"

import { deleteStudent, getAllStudent } from '../axios/';
import { useClass } from '../contexts/ClassContext';
export default function AdminStudents() {


    const { students, deleteStudentById } = useClass()
    const [isShowBill, setIsShowBill] = useState()
    const [viewStudentId, setViewStudentId] = useState()
    const [isShowAddStudentFormModal, setIsShowAddStudentFormModal] = useState()



    /*     useEffect(() => {
            getAllStudent()
                .then((res) => { setStudents(res.data.students) })
                .catch((err) => { console.log(err) })
    
    
    
    
        }, [isShowAddStudentFormModal, deleteStudent]) */

    const [queryStudent, setQueryStudent] = useState(students)


    console.log(queryStudent);




    return (
        <>

            <div style={{ marginTop: "100px" }}>

                {/*  ====================================== CARDS ============================================== */}
                <Row className='align-item-center rounded bg-danger'>
                    <Card className=" p-2 m-5 col-3 col-10 col-lg-3">
                        <Card.Title className=''>
                            Öğrenci Sayısı
                        </Card.Title>
                        <Card.Body>
                            <Row className='  align-items-center'>
                                <div className='col '>Kayıtlı Öğrenciler</div> <div className='col fs-1'>{students.length}</div>
                            </Row>
                        </Card.Body>
                    </Card>

                    <Card className=" p-2 m-5 col-3 col-10 col-lg-3">
                        <Card.Title className=''>
                            Faturalar
                        </Card.Title>
                        <Card.Body>
                            <Row className='  align-items-center'>
                                <div className='col'>Ödenecek Faturalar</div>
                                <div className='col fs-1'>3</div>
                            </Row>
                        </Card.Body>
                    </Card>

                    <Card className=" p-2 m-5 col-3 col-10 col-lg-3">
                        <Card.Title className=''>
                            Faturalar
                        </Card.Title>
                        <Card.Body>
                            <Row className='  align-items-center'>
                                <div className='col'>Ödenecek Faturalar</div>
                                <div className='col fs-1'>3</div>
                            </Row>
                        </Card.Body>
                    </Card>
                </Row>


                {/* ================================ STUDENT LIST =============================== */}

                <div className='rounded mt-2 p-4'>






                    <Button className='danger' onClick={(e) => {
                        setIsShowAddStudentFormModal(true)
                    }}> Öğrenci Ekle </Button>



                    <div className='bg-light rounded p-5'>
                        <Stack direction='horizontal' gap={3}>
                            <h3>Ara</h3>
                            <Form.Control type='text' placeholder='Öğrenci ismini giriniz' onChange={(e) => {
                                setQueryStudent(students.filter(student => student.name.includes(e.target.value)))
                            }} />
                        </Stack>
                        <hr />
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">isim</th>
                                    <th scope="col">Soyisim</th>
                                    <th scope="col">Faturaları Gör</th>
                                    <th scope="col">Silme</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    students.map((student) => {
                                        return (
                                            <tr>

                                                <td>{student.name.charAt(0).toUpperCase() + student.name.slice(1)}</td>
                                                <td>{student.surname.charAt(0).toUpperCase() + student.surname.slice(1)}</td>
                                                <td> <button className='btn btn-success' onClick={() => {
                                                    setViewStudentId(student._id)
                                                    setIsShowBill(true)
                                                }}>Faturalar</button> </td>
                                                <td>

                                                    <button className='btn btn-danger' onClick={() => {
                                                        const id = { id: student._id }
                                                        /* deleteStudent(id).then((res) => console.log(res.data)) */
                                                        deleteStudentById(id)
                                                    }}>Silme</button> </td>

                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            <ShowBillModal
                show={isShowBill}
                studentID={viewStudentId}
                handleClose={() => setIsShowBill(false)}
            />

            <ShowAddStudentFormModal
                show={isShowAddStudentFormModal}
                handleClose={() => setIsShowAddStudentFormModal(false)}
            />





        </>
    )
}
