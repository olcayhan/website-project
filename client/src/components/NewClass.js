import React from 'react'
import { Card, Stack, Button } from 'react-bootstrap'
import { useClass } from '../contexts/ClassContext'


export default function NewClass({ id, name, desc }) {

    const { deleteClassroom } = useClass()

    return (
        <Card>
            <Card.Body>
                <Card.Title className='d-flex justify-content-between align-items-baseline fw-normal mb-3'>
                    <div className="me-2">{name}</div>
                    <Button className='d-flex align-items-baseline' variant="danger" onClick={() => { deleteClassroom({ id }) }}>Kursu Sil</Button>
                </Card.Title>

                <div className="me-2 fs-">{desc}</div>

                <Stack direction="horizontal" gap="4" className="mt-4" >
                    <Button variant='outline-primary' >Öğrenci Ekle</Button>
                    <Button variant='outline-success'>Öğrencileri Göster</Button>
                </Stack>

            </Card.Body>

        </Card>

    )
}
