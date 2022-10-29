import React, { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage"
import { v4 as uuidV4 } from "uuid"

import keman from "../assets/keman-card.jpg"
import gitar from "../assets/gitar-card.jpg"
import flut from "../assets/flut-card.jpg"
import piano from "../assets/piano-card.jpg"
import cello from "../assets/cello-card.jpg"
import baglama from "../assets/baglama-card.jpg"



const ClassContext = React.createContext();

export function useClass() {
    return useContext(ClassContext)
}


export const ClassProvider = ({ children }) => {
    const classroom = [{ id: 1, name: "Keman", img: keman }, { id: 2, name: "Gitar", img: gitar }, { id: 3, name: "Flüt", img: flut }, { id: 4, name: "Piyano", img: piano }, { id: 5, name: "Çello", img: cello }, { id: 6, name: "Bağlama", img: baglama }]
    const [students, setStudents] = useLocalStorage("students", [])




    function addStudent({ turkish, english, cardId }) {
        setStudents([...students, { id: uuidV4(), turkish, english, cardId }])
    }

    function deleteStudent(id) {
        setStudents(
            students.filter(student => student.id !== id)
        )
    }

    function getStudent({ cardId }) {
        return students.filter(student => student.cardId === cardId)
    }

    return <ClassContext.Provider value={{
        addStudent,
        deleteStudent,
        getStudent,
        students,
        classroom
    }}>
        {children}
    </ClassContext.Provider>
} 