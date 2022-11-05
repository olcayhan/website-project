import React from "react";
import Header from "./components/Header";
import HeaderAdmin from "./components/HeaderAdmin";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Main from "./screens/Main";
import AdminPage from "./screens/AdminPage";
import AdminClasses from "./screens/AdminClasses";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminStudents from "./screens/AdminStudents";


export default function App() {



    return (
        <div>

            {
                window.location.pathname !== "/classes" && window.location.pathname !== "/students" ? <Header /> : <HeaderAdmin />
            }

            <BrowserRouter>
                <Routes>
                    <Route index element={<Main />} />
                    <Route path={"/signin"} element={<Login />} />
                    <Route path={"/signup"} element={<Signup />} />
                    <Route path={"/admin"} element={<AdminPage />} />
                    <Route path={"/classes"} element={<AdminClasses />} />
                    <Route path={"/students"} element={<AdminStudents />} />

                </Routes>
            </BrowserRouter>



        </div>


    )
}