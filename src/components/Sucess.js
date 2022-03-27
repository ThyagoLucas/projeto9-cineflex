import styled from "styled-components";
function Sucess(props){

    console.log('sucess', props.datas);

    
    


    return(
        

            <ResumeReservation>
                
                <h1>Pedido feito com sucesso</h1>
                <h2>Filme e sessão</h2>

                <h3></h3>
            </ResumeReservation>

      
        
    )


}

//styles


const ResumeReservation = styled.div `

    display:flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-top: 80px;

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
        }
        h2{
            font-weight: 700;
            font-size: 18px;
            margin-top: 20px;
            padding: 10px;
            color: #293845;
        }

`



export default Sucess;