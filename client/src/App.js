import React from "react";
import Header from "./components/Header";
import Login from "./screens/Login";
import Main from "./screens/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";


export default function App() {



    return (
        <div>
            <Header />


            {<BrowserRouter>
                <Routes>
                    <Route index element={<Main />} />
                    <Route path={"/user"} element={<Login />} />
                </Routes>
            </BrowserRouter>}



        </div>


    )
}