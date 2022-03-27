import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "./api";



function Movies(){

    const [movieList, setFilmes] = useState([]);
    
    useEffect(() => {
        api
          .get("/movies")
          .then((response) => setFilmes(response.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);
    
    return (
        <>
        <main>
            <h1>Selecione o filme</h1>
            <div className="titles">
                {movieList.map((filme, index) => <Movie key = {index} infoMovie = {filme}/>)}
            </div>
        </main>
        </>
    )
}

function Movie(props){

    const {id, title, posterURL, releaseDate} = props.infoMovie;
   
    return(
        <Link to={`/sessoes/${id}` }>
            <img src={posterURL} alt={`Imagem do filme ${title}`}/>
        </Link>
    );
}

export default Movies;