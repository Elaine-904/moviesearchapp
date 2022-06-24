import React from "react";
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
                        placeholder="enter the name of the movie..." />
                    <button  class="btn btn-outline-warning" onClick={handleSubmit} type="submit"  >search</button>
            </Form>
    )

}

export default Search