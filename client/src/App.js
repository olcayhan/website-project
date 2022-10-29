import React from "react";
import Header from "./components/Header";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Main from "./screens/Main";
import UserPage from "./screens/AdminPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";


export default function App() {



    return (
        <div>
            {
                window.location.pathname !== "/admin" ? <Header /> : <span></span>
            }



            {<BrowserRouter>
                <Routes>
                    <Route index element={<Main />} />
                    <Route path={"/signin"} element={<Login />} />
                    <Route path={"/admin"} element={<UserPage />} />
                    <Route path={"/signup"} element={<Signup />} />

                </Routes>
            </BrowserRouter>}



        </div>


    )
}