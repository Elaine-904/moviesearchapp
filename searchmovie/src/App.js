import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Fetch from './components/Fetch';
import Header from "./components/Header";
import './index.css';

function App() {
    return (
        <div className='App'>
            <Header/>
            <Fetch/>
        </div>
    )
}
export default App