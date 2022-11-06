import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useClass } from '../contexts/ClassContext'

export default function AdminStudents() {

    const { students } = useClass();

    return (
        <div style={{ marginTop: "180px" }}>


            {/*  ====================================== CARDS ============================================== */}
            <Row className='align-item-center bg-dark rounded'>
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



                <Card className=" p-2 m-5 col-3 col-10 col-lg-3">
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

            <div className='bg-dark rounded mt-5 p-5'>



                <div className='bg-light rounded p-5'>

                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">name</th>
                                <th scope="col">Surname</th>
                                <th scope="col">Faturaları Gör</th>
                                <th scope="col">Sil</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                students.map((student) => {
                                    return (
                                        <tr>

                                            <td>{student.name}</td>
                                            <td>{student.surname}</td>
                                            <td> <div className='btn btn-success'>Faturalar</div> </td>
                                            <td> <div className='btn btn-danger'>X</div> </td>

                                        </tr>
                                    );
                                })
                            }



                            
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
