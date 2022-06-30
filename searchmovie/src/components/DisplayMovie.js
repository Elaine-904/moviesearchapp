import { Table } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import "bootstrap-icons/font/bootstrap-icons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import {useMemo, useEffect, useState} from "react";

const defaultPoster = "https://image.tmdb.org/t/p/w300/pnLopkBeVGd0v77gpTNdPqQESUs.jpg"


const DisplayMovie = ({ loading, errorMessage, filterlists,setFilterLists}) => {

    function requestSort(sortedField){
        let sortedList = [...filterlists];
        if (sortedField !== null) {
            sortedList.sort((a,b)=>{
                if (a[sortedField] < b[sortedField]) {
                    return -1;
                }
                if (a[sortedField] > b[sortedField]) {
                    return 1;
                }
                return 0;
                });
            }
        setFilterLists(sortedList);
    }
    
    const showList = filterlists.map((movie, index) => {
        return (<tr className="table-dark" key={movie.id}>
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
                    <Table  >
                        <tr>
                            <th>#</th>
                            <th>Poster </th>
                            <th>Movie Title<button class="btn btn-sm" onClick={() =>  requestSort('title')} type="button"><FontAwesomeIcon icon={faSort} /></button></th>
                            <th>Overview<button class="btn btn-sm" onClick={() =>  requestSort('overview')} type="button"><FontAwesomeIcon icon={faSort} /></button></th>
                            <th>Score<button class="btn btn-sm" onClick={() =>  requestSort('popularity')} type="button"><FontAwesomeIcon icon={faSort} /></button></th>
                        </tr>
                        <tbody>
                            {showList}
                        </tbody>
                    </Table>
                </Container>
            )
        }
    </>
    )
}



export default DisplayMovie