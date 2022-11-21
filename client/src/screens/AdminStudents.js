import React, { useState, useEffect } from 'react'
import { Button, Card, Container, Form, Row, Stack } from 'react-bootstrap'
import ShowBillModal from "../components/ShowBillModal"
import ShowAddStudentFormModal from "../components/ShowAddStudentFormModal"
import { useClass } from '../contexts/ClassContext';
import AdminClasses from './AdminClasses';
import "./AdminStudents.css"

export default function AdminStudents() {


    const { students, deleteStudentById, classroom } = useClass()
    const [isShowBill, setIsShowBill] = useState()
    const [viewStudentId, setViewStudentId] = useState()
    const [isShowAddStudentFormModal, setIsShowAddStudentFormModal] = useState()
    const [queryStudent, setQueryStudent] = useState(students)

    useEffect(() => {
        setQueryStudent(students)
    }, [students])


    return (
        <>

            <Container style={{ marginTop: "100px" }}>

                {/*  ====================================== CARDS ============================================== */}
                <Row className='align-item-center'>
                    <Card className="studentCard p-2 m-5 col-3 col-10 col-lg-3" style={{ backgroundColor: "#7D8F69" }}>
                        <Card.Title className="fs-1">
                            Öğrenci Sayısı
                        </Card.Title>
                        <Card.Body>
                            <Row className='align-items-center'>
                                <div className='col '>Öğrenciler</div>
                                <div className='col fs-1'>{students.length}</div>
                            </Row>
                        </Card.Body>
                    </Card>

                    <Card className="billCard p-2 m-5 col-3 col-10 col-lg-3" style={{ backgroundColor: "#7D8F69" }}>
                        <Card.Title className="fs-1">
                            Faturalar
                        </Card.Title>
                        <Card.Body>
                            <Row className='align-items-center'>
                                <div className='col'>Faturalar</div>
                                <div className='col fs-1'>3</div>
                            </Row>
                        </Card.Body>
                    </Card>

                    <Card className="coursesCard p-2 m-5 col-3 col-10 col-lg-3" style={{ backgroundColor: "#7D8F69" }}>
                        <Card.Title className="fs-1">
                            Kurslar
                        </Card.Title>
                        <Card.Body>
                            <Row className='align-items-center'>
                                <div className='col'>Kurslar</div>
                                <div className='col fs-1'> {classroom.length}</div>
                            </Row>

                        </Card.Body>
                    </Card>
                </Row>


                {/* ================================ STUDENT LIST =============================== */}

                <div className='rounded' style={{ marginTop: "100px" }}>

                    <Button className='danger' onClick={(e) => {
                        setIsShowAddStudentFormModal(true)
                    }}> Öğrenci Ekle </Button>

                    <div className='studentTable rounded p-5'>
                        <Stack direction='horizontal' gap={3}>
                            <h3>Ara</h3>
                            <Form.Control type='text' placeholder='Öğrenci ismini giriniz' onChange={(e) => {
                                setQueryStudent(students.filter(student => student.name.includes(e.target.value)))
                            }} />
                        </Stack>
                        <hr />
                        <table className="table table-striped">
                            <thead className="table table-striped bg-dark text-light ">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Tarih </th>
                                    <th scope="col">İsim</th>
                                    <th scope="col">Soyisim</th>
                                    <th scope="col">Faturaları Gör</th>
                                    <th scope="col">Kursları</th>
                                    <th scope="col">Silme</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    queryStudent.map((student, i) => {
                                        return (
                                            <tr>
                                                <th scope='row'>{i + 1}</th>
                                                <td>10.11.2020</td>
                                                <td>{student.name.charAt(0).toUpperCase() + student.name.slice(1)}</td>
                                                <td>{student.surname.charAt(0).toUpperCase() + student.surname.slice(1)}</td>
                                                <td> <button className='btn btn-success' onClick={() => {
                                                    setViewStudentId(student._id)
                                                    setIsShowBill(true)
                                                }}>Faturalar</button> </td>
                                                <td>

                                                    <button className='btn btn-danger' onClick={() => {
                                                        const id = { id: student._id }
                                                        deleteStudentById(id)
                                                    }}>Silme</button> </td>
                                                <td>

                                                    <button className='btn btn-danger' onClick={() => {
                                                        const id = { id: student._id }
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
            </Container>

            <AdminClasses />


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
