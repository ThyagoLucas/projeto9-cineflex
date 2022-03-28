import { useNavigate } from "react-router-dom";

import styled from "styled-components";

function Sucess({resume}){
    const {name, cpf, movie, day, section} = resume;
    const navigate = useNavigate();

    function toHome(){
        navigate('/');
    }
  
    return(
        <ResumeReservation>
            <h1>Pedido feito com sucesso</h1>
            <div>
                <h2>Filme e sessão</h2>
                <p>{movie}</p>
                <p>{day} {section}</p>
            </div>

            <div>
                <h2>Ingressos</h2>
                {resume.seat.map((number, index)=> <SeatsReservation key={index} number={number}/>)}
            </div>

            <div>
                <h2>Comprador</h2>
                <p>Nome: {name}</p>
                <p>CPF: {cpf}</p>
            </div>

            <div className="button">
            <button onClick={()=>toHome()}>Voltar para home </button>
            </div>
            
        </ResumeReservation>       
    )
}

function SeatsReservation({number}){
    return(
        <p>Assento {number}</p>
    );
}

//styles

const ResumeReservation = styled.div `

    display:flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-top: 30px;

        h1{
            dispay:flex;
            align-items: center;
            justify-content: center;
            color: #247A6B;
            font-weight: 700;
            font-size: 24px;
            line-height: 28px;
            display: flex;
            align-items: center;
            text-align: center;
            letter-spacing: 0.04em;
            padding: 0% 25% 0% 25%;
            margin-bottom: 15px;
        }
        h2{
            font-weight: 700;
            font-size: 20px;
           
            margin-top: 20px;
            padding: 10px;
            color: black;
        }
        p{
            margin:5px 0px 10px 10px;
            font-weight: 400;
            font-size: 18px;
            line-height: 26px;
            color: #293845;
        }
        .button{
            display:flex;
            justify-content: center;
            margin-top: 60px;
        }
        button{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 21px;
            color:#FFFFFF;
            background: #E8833A;
            border-radius: 3px;
            width: 225px;
            height: 42px;
        }

`

export default Sucess;