import axios from "axios";

const HTTP = axios.create({
    baseURL: "http://localhost:5000/"
})

export async function addNewStudent(studentData) {
    return await HTTP.post("/students/addstudent", studentData);
}

export async function getAllStudent() {
    return await HTTP.get("/students/getstudents");
}

export async function deleteStudent(id) {

    return await HTTP.post("/students/deletestudent" , id);

}

