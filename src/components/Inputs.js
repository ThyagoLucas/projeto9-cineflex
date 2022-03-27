import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

import api from "./api";

function Inputs({setDatas, infosUser, resume, setResume}){

    const navigate = useNavigate();

    function setName(event){
        setDatas({...infosUser, name:event.target.value});
        setResume({...resume, name:event.target.value});
    }
    function setCpf(event){
        setDatas({...infosUser, cpf:event.target.value});
        setResume({...resume, cpf:event.target.value});
    }
    function sendReservation(event){
        event.preventDefault();

        infosUser.ids.length !== 0 ?
            api
                .post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', infosUser)
                .then((response) => {
                    console.log(response);
                    alert('Shoow! Fizemos sua reserva :)');
                    navigate('/sucess');
                })
                .catch(err =>(console.log("Erro foi esse aqui",err)))
        
            :alert('Selecione ao menos 1 assento');

    }
  
    return(
       <InputNameAndCpf onSubmit={sendReservation}>
            <h3>Nome do Comprador</h3>
            <input placeholder='Digite seu nome...' required onChange={e=> setName(e)}></input>

            <h3>CPF do comprador:</h3>
            <input placeholder='Digite seu CPF...' onChange={e=> setCpf(e)}></input>
           
            <button type='submit' > enviar </button>
            
       </InputNameAndCpf>
    );
}

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
export default Inputs;
