import { useState, useEffect } from "react";
import Search from "./Search";
import {  Table } from "react-bootstrap";
import Container from 'react-bootstrap/Container';


function Fetch(){
    const [lists,setLists] = useState([])
    const [loading, setLoading] = useState("")
    const [errorMessage, setErrorMessage] = useState(null)
    const [searchValue, setSearchValue] = useState("harry");

    useEffect(() => {search()}, []);

    const search = async(searchValue) =>{
        const url = `https://api.themoviedb.org/3/search/movie?api_key=98cdb401ee8454975b44f71ce9e467be&language=en-US&query=${searchValue}&page=1&include_adult=false`
        try{
            const res = await fetch(url);
            const data = await res.json();
            setLists(data.results)
        }catch(err){
            setLoading(false)
            setErrorMessage('an unexpected error occured')
        }
    }

    const defaultPoster = "https://image.tmdb.org/t/p/w300/pnLopkBeVGd0v77gpTNdPqQESUs.jpg"
    const retrieveMovies = 
        loading && !errorMessage ?(
            <span>loading...</span>
        ) :errorMessage ? (
            <div>{errorMessage}</div>
        ):(
            <Container>
                <Table className="table table-striped table-dark" >
                        <tr>
                            <th>#</th>
                            <th>Poster </th>
                            <th>Title</th>
                            <th>Overview</th>
                            <th>Popularity</th>
                        </tr>
                    <tbody>
                    {lists.map((movie,index)=>{
                return  <tr className="table-dark" key={movie.id}>
                            <td>{index+1}</td>
                            <td >
                                <img
                                    variant="top"
                                    width="100"
                                    alt={`the movie title is ${movie.original_title}`}
                                    src={movie.poster_path==null ? defaultPoster: `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
                                    }
                                />
                            </td>
                            <td >{movie.original_title}</td>
                            <td >{movie.overview} </td>
                            <td >{movie.popularity} </td>
                        </tr>
                    })}
                    </tbody>
                    </Table>
            </Container>
        )

    return (
                <>
                    <Search search ={search} searchValue={searchValue} setSearchValue={setSearchValue}/>
                        {retrieveMovies}

                   
                </>
            )
}

export default Fetch;