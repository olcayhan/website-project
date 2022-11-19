import axios from "axios";

const HTTP = axios.create({
    baseURL: "http://localhost:5000/"
})

export async function addNewStudent(formData) {
    return await HTTP.post("/students/addstudent", formData);
}