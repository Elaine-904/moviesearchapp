import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import ContainBox from './components/ContainBox';
import Calculator from './components/Calculator';

function App() {
    return (
        <div>
            <ContainBox/>
            <Calculator/>
        </div>
    )
}
export default App