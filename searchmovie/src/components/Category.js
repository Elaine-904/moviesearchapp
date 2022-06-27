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
                            <option value = "12">Adventure</option>
                            <option value = "18">Comedy</option>
                            <option value = "80">Crime</option>
                            <option value="99">Documentary</option>
                            <option value="10751">Family</option>
                            <option value="14">Fantasy</option>
                </select>
        </>
    )
}

export default Category