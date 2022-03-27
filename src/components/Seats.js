import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";

import api from './api';

import styled from 'styled-components';
import Footer from './Footer';

function Seats ({setSeat, setDatas, infosUser}){
    const objectModel = {
                        name:'',
                        day: {id:'', weekday:'', date:''},
                        movie: {title:'', posterURL:''},
                        seats:[]};
    
    const {idSessao} = useParams();
    const [infoSeats , setInfoSeats] = useState(objectModel);
   

    useEffect(() => {
        api 
            .get(`/showtimes/${idSessao}/seats`)
            .then(response => setInfoSeats(response.data))
            .catch(err => alert('falhou, segue erro: ', err));
    },[]);


    const {name:horario,day:{id, weekday, date},movie:{title, posterURL}, seats} = infoSeats;

    return (
    <>
        <main>
            <h1>Selecione o(s) assento(s)</h1>
            <DivSeats>
            {seats.map((seatStatus, index)=> <Seat 
                    key={index}
                    seatStatus={seatStatus}
                    setSeat={setSeat}
                    />)} 
            </DivSeats>
            <InfoStates />

            <Inputs setDatas={setDatas} infosUser={infosUser}/>
        </main>
        
     <Footer title={title} img = {posterURL} day={weekday} section={horario}/>
    </>
    );
}

function Seat(props){
    
    const {id, name:seat,isAvailable} = props.seatStatus;
    const [selected, setselected] = useState(false);

    function toggle(value){
        value = Number (value);
        props.setSeat(value);
        !selected ? setselected(true):setselected(false);
    }
    const status = `${selected ? 'selected':'available'}`;

    return isAvailable ? (
       <h2 className={status} onClick={()=>toggle(id)}>{seat}</h2> 
    ):(<h2 className='occupied' onClick={()=>alert('Esse assento não está disponível')}>{seat}</h2> );
}

function Inputs({setDatas, infosUser}){

    const navigate = useNavigate();

    console.log(infosUser);
    function sendReservation(event){
        event.preventDefault();

        infosUser.ids.length !== 0 ?
            api
                .post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', infosUser)
                .then(() => {
                    alert('Shoow! Fizemos sua reserva :)');
                    navigate('/sucess');
                })
                .catch(err =>(console.log("Erro foi esse aqui",err)))
        
            :alert('Selecione ao menos 1 assento');

    }
    


    return(
       <InputNameAndCpf onSubmit={sendReservation}>
            <h3>Nome do Comprador</h3>
            <input placeholder='Digite seu nome...' required onChange={e=> setDatas({...infosUser, name:e.target.value})}></input>

            <h3>CPF do comprador:</h3>
            <input placeholder='Digite seu CPF...' onChange={e=> setDatas({...infosUser, cpf:e.target.value})}></input>
           
            <button type='submit' > enviar </button>
            
            
       </InputNameAndCpf>
    )
}

function InfoStates(){
    return(
        <DivInfoStatus className='infoStatus'>
            <div>
                <h1 className='selected'></h1>
                <h2>Selecionado</h2>
            </div>

            <div >
                <h1 className='available'></h1>
                <h2>Disponível</h2>
            </div>

            <div>
                <h1 className='occupied'></h1>
                <h2>Indiponível</h2>
            </div>
        </DivInfoStatus>
            
    )
}

//Style
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
        div h1{
            width: 20px;
            height: 20px;
            border-radius: 50%;
            margin-bottom: 3px;
          }
`
const InputNameAndCpf = styled.form`
    display:flex;
    flex-direction: column;
    color: #293845;
    margin-top: 25px;
    width: 100%;

    h3{
        display:flex;
        align-items-flex;
    }

    input{
        font-style: italic;
        font-weight: 400;
        font-size: 15px;
        line-height: 21px;
        margin: 3px 0px 20px;
        padding: 10px;
    }

`
export default Seats;