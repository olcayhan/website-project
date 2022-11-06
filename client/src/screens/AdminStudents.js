import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useClass } from '../contexts/ClassContext'

export default function AdminStudents() {

    const { students } = useClass();

    return (
        <div style={{ marginTop: "180px" }}>


            {/*  ====================================== CARDS ============================================== */}
            <Row className='align-item-center bg-danger'>
                <Card className=" p-2 m-5  col-3 col-10 col-lg-3">
                    <Card.Title className=''>
                        Öğrenci Sayısı
                    </Card.Title>
                    <Card.Body>
                        <Row className='  align-items-center'>
                            <div className='col '>Kayıtlı Öğrenciler</div> <div className='col fs-1'>39</div>
                        </Row>
                    </Card.Body>
                </Card>

                <Card className=" p-2 m-5  col-3 col-10 col-lg-3 ">
                    <Card.Title className=''>
                        Ödenmiş Faturalar
                    </Card.Title>
                    <Card.Body>
                        <Row className='  align-items-center'>
                            <div className='col'>Ödenen Faturalar</div> <div className='col fs-1'>17</div>
                        </Row>
                    </Card.Body>
                </Card>



                <Card className=" p-2 m-5  col-3 col-10 col-lg-3">
                    <Card.Title className=''>
                        Ödenecek Fatura Sayisi
                    </Card.Title>
                    <Card.Body>
                        <Row className='  align-items-center'>
                            <div className='col'>Ödenecek Faturalar</div> <div className='col fs-1'>3</div>
                        </Row>
                    </Card.Body>
                </Card>
            </Row>


            {/* ================================ STUDENT LİST =============================== */}

            <div className='bg-danger mt-5 p-5'>



                <div className='bg-light rounded p-5'>

                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">name</th>
                                <th scope="col">Surname</th>
                                <th scope="col">Email</th>
                                <th scope="col">Kurslar</th>
                                <th scope="col">Sil</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Kurslar</td>
                                <td> <div className='btn btn-danger'>Kullanıcıyı Sil</div> </td>
                            </tr>
                            
                            <tr>
                                
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td> <div className='btn btn-danger'>Kullanıcıyı Sil</div> </td>
                            </tr>
                            <tr>
                                
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td> <div className='btn btn-danger'>Kullanıcıyı Sil</div> </td>
                            </tr>
                            <tr>
                                
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td> <div className='btn btn-danger'>Kullanıcıyı Sil</div> </td>
                            </tr>
                        </tbody>
                    </table>

                </div>

            </div>

            <Button variant="primary" > Öğrenci Ekle</Button>

            {students.map(student => {
                return (<p className='text-light'>{student.name}</p>)
            })}
        </div>
    )
}
