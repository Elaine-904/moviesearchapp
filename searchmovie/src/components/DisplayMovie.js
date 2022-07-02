import { Table } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import "bootstrap-icons/font/bootstrap-icons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import {useMemo, useEffect, useState} from "react";

const defaultPoster = "https://image.tmdb.org/t/p/w300/pnLopkBeVGd0v77gpTNdPqQESUs.jpg"


const DisplayMovie = ({ loading, errorMessage, filterlists,setFilterLists}) => {
    const [direction, setDirection] = useState('ascending')


    function handleClick(sortedField){
        let sortedList = [...filterlists];
        if (sortedField !== null) {
            sortedList.sort((a,b)=>{
                if (direction==='ascending') {
                    setDirection('descending')
                    return a[sortedField] -b[sortedField];
                }
                if (direction==='descending') {
                    setDirection('ascending')
                    return b[sortedField] -a[sortedField];
                }
                return 0;
                });
            }
        setFilterLists(sortedList);
    }

    const showList = filterlists.map((movie, index) => {
        return (<tr key={movie.id}>
            <td>{index + 1}</td>
            <td >
                <img
                    variant="top"
                    width="100"
                    alt={`the movie title is ${movie.original_title}`}
                    src={movie.poster_path == null ? defaultPoster : `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
                    }
                />
            </td>
            <td >{movie.original_title}</td>
            <td >{movie.overview} </td>
            <td >{parseInt(movie.popularity)} </td>
        </tr>)
    })

    return (<>
        {
            loading && !errorMessage ? (
                <span>loading the movie...</span>
            ) : errorMessage ? (
                <div>{errorMessage}</div>
            ) : (
                <Container>
                    <Table className="table table-hover table-dark" >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Poster </th>
                            <th>Movie Title</th>
                            <th>Overview</th>
                            <th>Score<button  class="btn btn-sm btn-light" onClick={() => handleClick('popularity')} type="button"><FontAwesomeIcon icon={faSort} /></button></th>
                        </tr>
                        </thead>
                        <tbody>
                            {showList}
                        </tbody>
                    </Table>
                </Container>
            )
        }
         <footer >
          <div>
            <p className="fst-italic text-reset">Made with react-bootstrap by elaine.</p>
            </div>
        </footer>
    </>
    )
}



export default DisplayMovie