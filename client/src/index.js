import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/style.css';
import { ClassProvider } from './contexts/ClassContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <ClassProvider>
        <App />
    </ClassProvider>

    , document.getElementById("root")

);

