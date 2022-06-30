import { useState, useEffect,useMemo } from "react";
import Search from "./Search";
import Category from "./Category";
import DisplayMovie from "./DisplayMovie";


function Fetch(){
    const [lists,setLists] = useState([]);
    const [filterlists, setFilterLists] = useState([])
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)
    const [searchValue, setSearchValue] = useState("");
    const [optionsState, setOptionsState] =useState(0) 

    useEffect(()=>{
        fetchMovie();
    },[]);

    const fetchMovie = async()=>{
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=98cdb401ee8454975b44f71ce9e467be&language=en-US&page=1")
            .then(res=>res.json())
            .then(data=>{
                setLists(data.results);
                setFilterLists(data.results);
                setLoading(false);
                console.log(lists)
            })
    }

    const search = async(searchValue) =>{
        const url = `https://api.themoviedb.org/3/search/movie?api_key=98cdb401ee8454975b44f71ce9e467be&language=en-US&query=${searchValue}&page=1&include_adult=false`
        try{
            const res = await fetch(url);
            const data = await res.json();
            setLists(data.results);
            setFilterLists(data.results);
            console.log(lists)
        }catch(err){
            setLoading(false)
            setErrorMessage('an unexpected error occured')
        }
    }

    const getCategory=(optionsState)=>{
        if(optionsState===0){
            return setFilterLists(lists);
        }
        let result = lists.filter((movie) =>(movie.genre_ids.includes(Number(optionsState))));
        setFilterLists(result)
    }

   
    


    return (
            <>   
                <Search
                    search={search}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />

                <Category
                    setFilterLists={setFilterLists}
                    optionsState={optionsState}
                    setOptionsState={setOptionsState}
                    lists={lists}
                    getCategory={getCategory}
                />

                <DisplayMovie
                    loading={loading}
                    errorMessage={errorMessage}
                    filterlists={filterlists}
                    setFilterLists={setFilterLists}
                />
            </>
            )
}



export default Fetch;