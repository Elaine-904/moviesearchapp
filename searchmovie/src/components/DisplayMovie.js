import { Table } from "react-bootstrap";
import Container from 'react-bootstrap/Container';

const defaultPoster = "https://image.tmdb.org/t/p/w300/pnLopkBeVGd0v77gpTNdPqQESUs.jpg"

const DisplayMovie = ({ loading, errorMessage, filterlists }) => {

    return (<>
        {
            loading && !errorMessage ? (
                <span>loading the movie...</span>
            ) : errorMessage ? (
                <div>{errorMessage}</div>
            ) : (
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
                            {filterlists.map((movie, index) => {
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
                                    <td >{movie.popularity} </td>
                                </tr>)
                            })}
                        </tbody>
                    </Table>
                </Container>
            )
        }
    </>
    )
}



export default DisplayMovie