import React, { useState, useEffect } from 'react'
import { Button, Card, Container, Form, Row, Stack } from 'react-bootstrap'
import ShowBillModal from "./modals/ShowBillModal"
import ShowAddStudentFormModal from "./modals/ShowAddStudentFormModal"
import { useClass } from '../../contexts/ClassContext';
import AdminClasses from './AdminClasses';
import "../styles/AdminStudents.css"

export default function AdminStudents() {


    const { students, deleteStudentById, classroom } = useClass()
    const [isShowBill, setIsShowBill] = useState()
    const [viewStudentId, setViewStudentId] = useState()
    const [isShowAddStudentFormModal, setIsShowAddStudentFormModal] = useState()
    const [queryStudent, setQueryStudent] = useState(students)

    // uppercase and lowercase
    useEffect(() => {
        setQueryStudent(students)
    }, [students])


    return (
        <>

            <Container style={{ marginTop: "100px" }}>

                {/*  ====================================== CARDS ============================================== */}
                <Row className='align-item-center'>
                    <Card className="studentCard p-2 m-5 col-3 col-10 col-lg-3" style={{ backgroundColor: "#203239" }}>
                        <Card.Title className="fs-1">
                            Öğrenci Sayısı
                        </Card.Title>
                        <Card.Body>

                            <Row className='align-items-center'>
                                <div className='col '>Öğrenciler</div>
                                <div className='col fs-1'>{students.length}</div>


                                <div className='col fs-2'>
                                    <Button className='btn bg-dark rounded-5 border-1 text-light border-light' onClick={(e) => {
                                        setIsShowAddStudentFormModal(true)
                                    }}> Ekle </Button>
                                </div>
                            </Row>
                        </Card.Body>
                    </Card>

                    <Card className="billCard p-2 m-5 col-3 col-10 col-lg-3" style={{ backgroundColor: "#203239" }}>
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

                    <Card className="coursesCard p-2 m-5 col-3 col-10 col-lg-3" style={{ backgroundColor: "#203239" }}>
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
                    <div className='studentTable table-responsive rounded p-5 text-light'>
                        <Stack direction='horizontal' gap={3}>
                            <h3>Ara</h3>


                            <Form.Control className='bg-dark text-light' type='text' placeholder='Öğrenci ismini giriniz' onChange={(e) => {
                                setQueryStudent(students.filter(student => student.name.includes(e.target.value)))
                            }} />
                        </Stack>
                        <hr />
                        <table className="table">
                            <thead className=" bg-dark text-light ">
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
                            <tbody className='text-light'>
                                {
                                    queryStudent.map((student, i, key) => {
                                        return (
                                            <tr>
                                                <th scope='row'>{i + 1}</th>
                                                <td>10.11.2020</td>
                                                <td>{student.name.charAt(0).toUpperCase() + student.name.slice(1)}</td>
                                                <td>{student.surname.charAt(0).toUpperCase() + student.surname.slice(1)}</td>
                                                <td>
                                                    <button className='btn btn-success' onClick={() => {
                                                        setViewStudentId(student._id)
                                                        setIsShowBill(true)
                                                    }}>Faturalar</button>
                                                </td>
                                                <td><button className='btn btn-secondary'>Kurslar</button> </td>

                                                <td>
                                                    <button className='btn btn-danger' onClick={() => {
                                                        const id = { id: student._id }
                                                        deleteStudentById(id)
                                                    }}>Silme</button>
                                                </td>

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
