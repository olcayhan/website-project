import React from "react";
import Header from "./components/home/Header";
import HeaderAdmin from "./components/home/HeaderAdmin";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Main from "./screens/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminStudents from "./components/admin/AdminStudents";


export default function App() {



    return (
        <div>

            {
                window.location.pathname !== "/admin" ? <Header /> : <HeaderAdmin />
            }

            <BrowserRouter>
                <Routes>
                    <Route index element={<Main />} />
                    <Route path={"/signin"} element={<Login />} />
                    <Route path={"/signup"} element={<Signup />} />
                    <Route path={"/admin"} element={<AdminStudents />} />

                </Routes>
            </BrowserRouter>



        </div>


    )
}