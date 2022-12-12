import React, { useContext, useEffect, useCallback, useMemo, useState } from "react";
import keman from "../assets/keman-card.jpg"
import gitar from "../assets/gitar-card.jpg"
import flut from "../assets/flut-card.jpg"
import piano from "../assets/piano-card.jpg"
import cello from "../assets/cello-card.jpg"
import baglama from "../assets/baglama-card.jpg"
import { getAllStudent, addNewStudent, deleteStudent } from "../axios";



const ClassContext = React.createContext();

export function useClass() {
    return useContext(ClassContext)
}


export const ClassProvider = ({ children }) => {
    const classroom = [{ id: 1, name: "Keman", img: keman }, { id: 2, name: "Gitar", img: gitar }, { id: 3, name: "Flüt", img: flut }, { id: 4, name: "Piyano", img: piano }, { id: 5, name: "Çello", img: cello }, { id: 6, name: "Bağlama", img: baglama }]
    const [isRender, setRender] = useState()

    const [students, setStudents] = useState([])

    useEffect(() => {
        getAllStudents()
        setRender(false)
    }, [isRender])


    function getAllStudents() {
        getAllStudent()
            .then((res) => { setStudents(res.data.students) })
            .catch((err) => { console.log(err) })
        setRender(true)
    }

    function addStudent(student) {
        addNewStudent(student)
            .then((res) =>
                console.log(res))
            .catch((err) => console.log(err))
        setRender(true)
    }

    function deleteStudentById(id) {
        deleteStudent(id)
            .then(response => console.log(response))
            .catch(e => console.log(e));
        setRender(getStudent(id))
    }

    function getStudents(classID) {
        return students.filter(student => student.classID === classID)
    }

    function getStudent(studentID) {
        return students.find(student => student._id === studentID)
    }

    function getClassroom(classID) {
        let studentArray = []
        let selectSlass = classroom.find(({ id }) => id === classID);
        students.map((student) => student.courses.map((course) => {
            if (selectSlass?.name === course.class) return studentArray.push(student)
        }))

        return studentArray;
    }

    function payBill() {

    }



    return <ClassContext.Provider value={{
        addStudent,
        deleteStudentById,
        getStudent,
        getStudents,
        getClassroom,
        students,
        classroom
    }}>
        {children}
    </ClassContext.Provider>
} 