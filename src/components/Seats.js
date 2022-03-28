import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import Footer from './Footer';
import api from './api';
import Inputs from "./Inputs";

import styled from 'styled-components';

function Seats ({setSeat, setDatas, infosUser, resume, setResume}){

    const objectModel = { name:'', day: {id:'', weekday:'', date:''}, movie: {title:'', posterURL:''},seats:[]};
    
    const {idSessao} = useParams();
    const [infoSeats , setInfoSeats] = useState(objectModel);

    const {name:horario,day:{ weekday },movie:{title, posterURL}, seats} = infoSeats;

    useEffect(() => {
        api 
            .get(`/showtimes/${idSessao}/seats`)
            .then(response => {
                setInfoSeats(response.data)
                setResume({...resume,   movie: response.data.movie.title,
                                        day: response.data.day.date,
                                        section: response.data.name});
            })
            .catch(err => alert('falhou, segue erro: ', err));
    },[]);

    return (
    <>
        <main>
            <h1>Selecione o(s) assento(s)</h1>
            <DivSeats>
                {seats.map((seatStatus, index)=> <Seat  key={index} seatStatus={seatStatus}setSeat={setSeat}/>)}
            </DivSeats>
            <InfoStates /> 
            <Inputs setDatas={setDatas} infosUser={infosUser} resume={resume} setResume={setResume}/>
        </main>
        <Footer title={title} img = {posterURL} day={weekday} section={horario}/>
    </>
    );
}

function Seat(props){
    
    const {id, name:seat,isAvailable} = props.seatStatus;

    const [selected, setselected] = useState(false);

    const status = `${selected ? 'selected':'available'}`;

    function toggle(numberSeat, value){
        value = Number (value);
        props.setSeat(numberSeat, value);

        !selected ? setselected(true):setselected(false);
    }
    
    return isAvailable ? 
       <h2 className={status} onClick={()=>toggle(seat,id)}>{seat}</h2> 
    :
      <h2 className='occupied' onClick={()=>alert('Esse assento não está disponível')}>{seat}</h2> 
}

function InfoStates(){
    return(
        <DivInfoStatus className='infoStatus'>
            <div>
                <h2 className='selected'></h2>
                <h3>Selecionado</h3>
            </div>

            <div >
                <h2 className='available'></h2>
                <h3>Disponível</h3>
            </div>

            <div>
                <h2 className='occupied'></h2>
                <h3>Indiponível</h3>
            </div>
        </DivInfoStatus>
            
    )
}

//Styleds
const DivSeats = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 15px;

    h2{
        font-weight: 400;
        font-size: 11px;
        line-height: 13px;
        letter-spacing: 0.04em;
        display:flex;
        align-items: center;
        justify-content: center;       
        width: 30px;
        height: 30px;
        border: 1px solid #7B8B99;
        border-radius: 50%;
        margin: 3px;
    }

`
const DivInfoStatus = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 15px;

        div{
            font-weight: 400;
            font-size: 13px;
            line-height: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin: 10px;   
        }
        div h2{
            width: 20px;
            height: 20px;
            border-radius: 50%;
            margin-bottom: 3px;
          }
`

export default Seats;