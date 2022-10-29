import React, { useState } from 'react'
import { Button, Container, Card, Stack } from 'react-bootstrap'
import AddClassModal from '../components/AddClassModal'
import NewClass from '../components/NewClass'
import { useClass } from '../contexts/ClassContext'

export default function UserPage() {

    const { classroom } = useClass()
    console.log(classroom);



    return (
        <Container style={{ marginTop: "90px" }}>

            <h1 className='linearText' style={{ textAlign: "center"}}> Dersler</h1>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(400px,1fr))", gap: "1rem", alignItems: "flex-start" }}>
                {classroom?.map(classes => {
                    return (
                        <NewClass
                            name={classes.name}
                            img={classes.img} />
                    )
                })
                }

            </div>
        </Container>
    )
}
