import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import NewClass from './NewClass'
import { useClass } from '../../contexts/ClassContext'
import ShowAllStudentsModal from "./modals/ShowAllStudentsModal"


export default function AdminClasses() {

    const { classroom } = useClass()
    const [isShowShowAllStudents, setIsShowShowAllStudents] = useState()
    const [viewStudentClassId, setViewStudentClassId] = useState()

    return (
        <>
            <Container style={{ marginTop: "90px" }}>

                <h1 style={{ textAlign: "center", color: '#fff' }}> Dersler</h1>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(400px,1fr))", gap: "1rem", alignItems: "flex-start" }}>
                    {
                        classroom?.map((classes, key) => {
                            return (
                                <NewClass
                                    key={key}
                                    id={classes.id}
                                    name={classes.name}
                                    img={classes.img}
                                    setClassID={setViewStudentClassId}
                                    setShowStudent={setIsShowShowAllStudents} />
                            )
                        })
                    }

                </div>
            </Container>


            <ShowAllStudentsModal
                show={isShowShowAllStudents}
                classID={viewStudentClassId}
                handleClose={() => setIsShowShowAllStudents(false)}
            />

        </>
    )
}
