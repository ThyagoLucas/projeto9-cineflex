import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import api from "./api";
import Footer from "./Footer";

import styled from "styled-components";

function AvailableTime(){

    const {idFilme} = useParams();
    const [section, setHorarios] = useState([]);
    const {title, posterURL, days} = section;
    
    useEffect(() => {
        api
            .get(`/movies/${idFilme}/showtimes`)
            .then ((response) => setHorarios(response.data))
            .catch((err) => console.log("ops! ocorreu um erro", err));
    } , []);
    
    return section.length !== 0 ? (
        <>
        <main>
            <h1>Selecione o horário</h1>
            {days.map((infoSectionsDay, index) => (
                <InfoSetion key={index} infoSetions = {infoSectionsDay}/>
            ))}
        </main>
        <Footer title={title} img = {posterURL} />
        </>
    ): 
    <> <h1>jequiti</h1></>
}

function InfoSetion(props){
    
    const {weekday, date, showtimes} = props.infoSetions;

    return(
        <SectionDay >
            <div>
                <h2>{weekday}</h2>
                <h3>{date}</h3>
            </div>
            
            <ul>
                {showtimes.map(time => (
                    <Times time={time}/>
                ))}
            </ul>
        </SectionDay>
    )
}
function Times(props){
    const {name, id} = props.time;
   
    return(
        <Link to={`/assentos/${id}`}>
            <li className="horario">{name}</li>
        </Link>
    );
}

 const SectionDay = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 25px;

    div{
        color:#293845;
        display:flex;
        flex-direction: row;
    }
    h3{
        margin-left: 8px;
    }
    ul{
        display: flex;
        flex-direction: row;
    }

    li{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 10px;
        color: #ffffff;
        width: 83px;
        height: 43px;
        margin: 15px 15px 20px 0px;
        background: #E8833A;  
        border-radius: 3px;
    }

 `

export default AvailableTime;