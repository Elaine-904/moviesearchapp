function Category({getCategory,optionsState,setOptionsState}){

    const handleSelect=event=>{
        setOptionsState(event.target.value);
        getCategory(optionsState);
    }
    return(<>  
                <select  
                    class="btn btn-outline-warning" 
                    value={optionsState} 
                    onChange={handleSelect}
                >  
                            <option value = "0">All</option>
                            <option value = "28">Action</option>
                            <option value = "12">Adventure</option>
                            <option value = "18">Comedy</option>
                            <option value = "80">Crime</option>
                            <option value="99">Documentary</option>
                            <option value="10751">Family</option>
                            <option value="14">Fantasy</option>
                            <option value="36">History</option>
                            <option value="27">Horror</option>
                            <option value="10402">Music</option>
                            <option value="9648">Mystery</option>
                            <option value="10749">Romance</option>
                            <option value="878">Science Fiction</option>
                            <option value="10770">TV Movie</option>
                            <option value="53">Thriller</option>
                            <option value="10752">War</option>
                            <option value="37">Western</option>
                </select>
        </>
    )
}

export default Category