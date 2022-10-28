import React, { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage"
import { v4 as uuidV4 } from "uuid"


const ClassContext = React.createContext();

export function useClass() {
    return useContext(ClassContext)
}


export const ClassProvider = ({ children }) => {
    const [classroom, setClassroom] = useLocalStorage("classroom", [])
    const [students, setStudents] = useLocalStorage("students", [])


    function addClassroom({ name, description }) {
        setClassroom([...classroom, { id: uuidV4(), name, description }])
    }

    function deleteClassroom({ id }) {
        setClassroom(prevClass => {
            return prevClass.filter(classroom => classroom.id !== id)
        })
    }

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
        addClassroom,
        deleteClassroom,
        addStudent,
        deleteStudent,
        getStudent,
        students,
        classroom
    }}>
        {children}
    </ClassContext.Provider>
} 