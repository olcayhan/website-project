import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import ShowStudentModal from '../components/ShowStudentModal'
import NewClass from '../components/NewClass'
import { useClass } from '../contexts/ClassContext'



export default function AdminClasses() {

    const { classroom } = useClass()

    const [isShowStudent, setIsShowStudent] = useState()
    const [viewStudentClassId, setViewStudentClassId] = useState()

    return (
        <>
            <Container style={{ marginTop: "90px" }}>

                <h1 className='linearText' style={{ textAlign: "center" }}> Dersler</h1>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(400px,1fr))", gap: "1rem", alignItems: "flex-start" }}>
                    {classroom?.map(classes => {
                        return (
                            <NewClass
                                id={classes.id}
                                name={classes.name}
                                img={classes.img}
                                setClassID={setViewStudentClassId}
                                setShowStudent={setIsShowStudent} />
                        )
                    })
                    }

                </div>
            </Container>


            <ShowStudentModal
                show={isShowStudent}
                classID={viewStudentClassId}
                handleClose={() => setIsShowStudent(false)}
            />

        </>
    )
}
