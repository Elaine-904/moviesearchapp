import React, { useState, useEffect } from "react";
import {Form} from "react-bootstrap";

function Search({search,searchValue,setSearchValue}){

    const handleOnchange = event=>{
        setSearchValue(event.target.value)
    }


    const handleSubmit = event =>{
        event.preventDefault();
        search(searchValue);
        resetInputfield();
      
    }
    const resetInputfield = () =>{
        setSearchValue("")
    }


    return(
            <Form className="search" >
                    <input 
                        type="text" 
                        onChange={handleOnchange} 
                        value={searchValue} 
                        placeholder="Enter the name of the movie..." />
                    <button  class="btn btn-outline-warning" onClick={handleSubmit} type="submit"  >  search</button>
                   
                    <button  class="btn btn-outline-warning" onClick={resetInputfield} type="submit"  >  reset </button>
            </Form>
    )

}

export default Search