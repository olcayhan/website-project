import React, { useState, useEffect } from 'react'
import { Button, Card, Container, Form, Row, Stack } from 'react-bootstrap'
import ShowBillModal from "./modals/ShowBillModal"
import ShowAddStudentFormModal from "./modals/ShowAddStudentFormModal"
import ShowStudentModal from "./modals/ShowStudentModal"

import "./sb-admin-2.min.css";

import { useClass } from '../../contexts/ClassContext';
import AdminClasses from './AdminClasses';
// import "../../styles/AdminStudents.css"

export default function AdminStudents() {


    const { students, classroom } = useClass()
    const [isShowBill, setIsShowBill] = useState()
    const [isShowAddStudentForm, setIsShowAddStudentForm] = useState()
    const [isShowStudent, setIsShowStudent] = useState()

    const [viewStudentId, setViewStudentId] = useState()
    const [queryStudent, setQueryStudent] = useState(students)
    const [filteredQuery, setFilteredQuery] = useState(students)

    // for initializing
    useEffect(() => {
        setQueryStudent(students)
    }, [students])


    // when user clicked checkbox
    function writeFilter(e) {
        let newFiltered = []
        filteredQuery.map((student) => {
            if (student.name.includes(e.target.value.toLowerCase()))
                return newFiltered.push(student)
        })
        setQueryStudent(newFiltered)

    }

    // // when user write input
    function toggleFilter(e) {
        let studentArray = []
        queryStudent.map((student) => {
            if (student.courses.filter(course => course.isPaid == false).length != 0)
                return studentArray.push(student)
        })

        if (e.target.checked) {
            setQueryStudent([...studentArray])
            setFilteredQuery([...studentArray])
        } else {
            setQueryStudent(students)
            setFilteredQuery(students)
        }
        console.log(studentArray)
    }

    let counter = 0;
    students.map(student => counter += student.courses.length);

    
    // let counter2 = 0;
    // students.map(student => student.courses.map((course) => {
    //     !course.isPaid && counter2++
    // }))

    return (
        <>


            <Container style={{ marginTop: "125px" }}>

                {/*  ====================================== CARDS ============================================== */}




                <div className='row d-flex justify-content-center align-items-center    '>

                    {/* ogrenciler card */}
                    <div class="col-xl-4 col-md-6 ">

                        <div class="card border-left border-left-5 border-left-primary  shadow  px-5 py-4">
                            <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class=" font-weight-bold text-primary text-uppercase mb-1">
                                            Kayıtlı Öğrenciler</div>
                                        <div class="fs-2 mb-0 font-weight-bold text-gray-800">{students.length}</div>
                                    </div>
                                    <div class="col-lg-3 col-sm-3">

                                        <div className='btn btn-primary rounded-4' onClick={(e) => {
                                            setIsShowAddStudentForm(true)
                                        }}>
                                            <i class="fas fa-user-plus fa-4x text-white-300"></i>
                                        </div>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* faturalar card */}
                    <div class="col-xl-4 col-md-6 ">

                        <div class="card border-left border-left-5 border-left-success  shadow  px-5 py-4">
                            <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class=" font-weight-bold text-success text-uppercase mb-1">
                                            Faturalar</div>
                                        <div class="fs-2 mb-0 font-weight-bold text-gray-800">
                                            {counter}
                                        </div>
                                    </div>
                                    <div class="col-auto">

                                        <i class="fas fa-duotone fa-receipt fa-4x text-success"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* faturalar card */}
                    <div class="col-xl-4 col-md-6 ">

                        <div class="card border-left border-left-5 border-left-warning  shadow  px-5 py-4">
                            <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class=" font-weight-bold text-warning text-uppercase mb-1">
                                            Kurslar</div>
                                        <div class="fs-2 mb-0 font-weight-bold text-gray-800">{classroom.length}</div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-guitar fa-4x text-warning"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>


                {/*
                
=========================================================== OLD CARDS ===========================================================

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
                                        setIsShowAddStudentForm(true)
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
                </Row> */}


                {/* ================================ STUDENT LIST =============================== */}


                <div class="card shadow mt-5 container-fluid ">

                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">ÖĞRENCİLER LİSTESİ</h6>
                    </div>


                    <div className='rounded bg-light card-body'>

                        <div className='studentTable table-responsive rounded p-5'>
                            <Stack direction='horizontal' gap={3}>

                                <div> <i class="fa-solid fa-magnifying-glass fa-2x text-primary"></i></div>


                                <Form.Control className='w-50 border border-5 border-primary text-dark-300' type='text' placeholder='Öğrenci ismini giriniz...'
                                    onChange={(e) => { writeFilter(e) }} />


                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                        onChange={(e) => { toggleFilter(e) }} />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Ödenmemiş Faturaları Göster
                                    </label>
                                </div>
                            </Stack>
                            <hr />
                            <table className="table">
                                <thead className='bg-light m-1'>
                                    <tr className=" font-weight-bold text-dark ">
                                        <th scope="col">#</th>
                                        <th scope="col">TARİH </th>
                                        <th scope="col">İSİM</th>
                                        <th scope="col">SOYİSİM</th>
                                        <th scope="col">FATURALARI GÖSTER</th>
                                        <th scope="col">DETAYLAR</th>
                                    </tr>
                                </thead>
                                <tbody className='text-dark'>
                                    {
                                        queryStudent?.map((student, i, key) => {
                                            return (
                                                <tr className='text-dark-500  '>
                                                    <th scope='row'>{i + 1}</th>
                                                    <td>{student.date}</td>
                                                    <td>{student.name.charAt(0).toUpperCase() + student.name.slice(1)}</td>
                                                    <td>{student.surname.toUpperCase()}</td>
                                                    <td>
                                                        <button className='btn btn-success px-5' onClick={() => {
                                                            setViewStudentId(student._id)
                                                            setIsShowBill(true)
                                                        }}>  <i class="fas fa-duotone fa-receipt fa-2x text-light"></i> </button>
                                                    </td>
                                                    <td>
                                                        <button className='btn btn-warning font-weight-bold px-3' onClick={() => {
                                                            setViewStudentId(student._id)
                                                            setIsShowStudent(true)
                                                        }}>  <i class="fa-sharp fa-solid fa-circle-info fa-2x text-light"></i> </button>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>



            </Container >

            <AdminClasses />


            <ShowBillModal
                show={isShowBill}
                studentID={viewStudentId}
                handleClose={() => setIsShowBill(false)}
            />

            <ShowStudentModal
                show={isShowStudent}
                studentID={viewStudentId}
                handleClose={() => setIsShowStudent(false)}
            />

            <ShowAddStudentFormModal
                show={isShowAddStudentForm}
                handleClose={() => setIsShowAddStudentForm(false)}
            />





        </>
    )
}
