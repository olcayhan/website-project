import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useClass } from '../contexts/ClassContext'

export default function AdminStudents() {

    const { students } = useClass();

    return (
        <div style={{ marginTop: "180px" }}>

            <Col>
                <Row>
                    <Card className="m-5 w-25">
                        <Card.Title>
                            Öğrenci Sayısı
                        </Card.Title>
                        <Card.Body>
                            Toplam Kullanıcı Sayısı
                        </Card.Body>
                    </Card>
                </Row>
            </Col>

            <Button variant="primary" > Öğrenci Ekle</Button>

            {students.map(student => {
                return (<p className='text-light'>{student.name}</p>)
            })}
        </div>
    )
}
 