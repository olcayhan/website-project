import React, { useState } from 'react'
import { Button, Container, Card, Stack } from 'react-bootstrap'
import AddClassModal from '../components/AddClassModal'
import NewClass from '../components/NewClass'
import { useClass } from '../contexts/ClassContext'

export default function UserPage() {

    const [isShowClass, setIsShowClass] = useState(false)

    const { classroom } = useClass()
    console.log(classroom);

    function onShowClass() {
        setIsShowClass(true)

    }


    return (
        <Container>
            <Stack direction="horizontal" gap="2">
                <Button className="m-4" onClick={() => onShowClass()} lick> Sınıf Ekle</Button>
            </Stack>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px,1fr))", gap: "1rem", alignItems: "flex-start" }}>
                {classroom.map(classes => {
                    return (
                        <NewClass
                            id={classes.id}
                            name={classes.name}
                            desc={classes.description} />
                    )
                })
                }

            </div>




            <AddClassModal
                show={isShowClass}
                handleClose={() => setIsShowClass(false)}
            />



            {/*  <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card> */}
        </Container>
    )
}
