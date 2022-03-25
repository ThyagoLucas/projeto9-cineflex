import Footer from "./Footer";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "./api";

function AvailableTime(){

    const {movieId} = useParams();
    const [section, setHorarios] = useState([]);
    
    useEffect(() => {
        api
            .get(`/movies/${movieId}/showtimes`)
            .then ((response) => setHorarios(response.data))
            .catch((err) => console.log("ops! ocorreu um erro", err));
    } , []);
    
    const {id, title, posterURL, releaseDate, days} = section;

    return section.length != 0 ? (
        <>
        <main>
            <h1>Selecione o horário</h1>
            {days.map(infoSectionsDay => (
                <InfoSetion infoSetions = {infoSectionsDay}/>
            ))};

        </main>
        <Footer title={title} img = {posterURL} />
        </>
    ): 
    <>
    <h1>jequiti</h1>
    
    </>;
}

function InfoSetion(props){
    
    const {weekday, date, showtimes} = props.infoSetions;

    return(
        <div className="sectionDay">
            <h2>{weekday}</h2>
            <h2>{date}</h2>
            <ul>
                {showtimes.map(time => (
                    <Times time={time}/>
                ))}
               
            </ul>
        </div>
    )
}

function Times(props){
    const {name, id} = props.time;
    //console.log(props.time);
    return(
        <Link to={`/available-seats/${id}`}>
            <li className="horario">{name}</li>
        </Link>
    );

}

export default AvailableTime;