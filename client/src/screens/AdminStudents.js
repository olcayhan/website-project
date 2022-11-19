import React, { useState } from 'react'
import { Button, Card, Form, Row } from 'react-bootstrap'
import { useClass } from '../contexts/ClassContext'
import ShowBillModal from "../components/ShowBillModal"
import { addNewStudent } from '../axios';

export default function AdminStudents() {

    const { students } = useClass();
    const [queryStudent, setQueryStudent] = useState(students)

    const [isShowBill, setIsShowBill] = useState()
    const [viewStudentId, setViewStudentId] = useState()


    const queryFunc = (e) => {
        setQueryStudent(students.filter(student => student.name.includes(e.target.value)))
    }

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



                    <Form.Control type='text' placeholder='Öğrenci ismini giriniz' onKeyUp={queryFunc} className="w-25" />


                    <Button className='danger' onClick={async (e) => {
                        console.log("test");
                        await addNewStudent( {name:"olcay",surname:"yarra1",courses:[]} ).then(response => console.log(response)).catch(e => console.log(e));
                    }}> Öğrenci Ekle </Button>


                    <div className='bg-light rounded p-5'>

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">name</th>
                                    <th scope="col">Surname</th>
                                    <th scope="col">Faturaları Gör</th>
                                    <th scope="col">Detay</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    queryStudent.map((student) => {
                                        return (
                                            <tr>

                                                <td>{student.name.charAt(0).toUpperCase() + student.name.slice(1)}</td>
                                                <td>{student.surname.charAt(0).toUpperCase() + student.surname.slice(1)}</td>
                                                <td> <button className='btn btn-success' onClick={() => {
                                                    setViewStudentId(student.id)
                                                    setIsShowBill(true)
                                                }}>Faturalar</button> </td>
                                                <td> <button className='btn btn-danger' onClick={() => alert("deleted")}>Detay</button> </td>

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





        </>
    )
}
