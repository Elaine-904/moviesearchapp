import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Fetch from './components/Fetch';
import Header from "./components/Header";
import "./styles/App.css";
import DarkMode from "./components/DarkMode";

function App() {
    return (
        <div className='App'>
            <Header/>
            <DarkMode />
            <Fetch/>
        </div>
    )
}
export default App