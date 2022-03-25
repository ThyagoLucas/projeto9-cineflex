import styled from 'styled-components';
import '../assets/css/reset.css';

function Footer(porps){
    const {title, img, day, section} = porps;
    return(
        <StyledFooter >
            <img src={img} alt={`Imagem do filme ${title}`}/>
            <h1>{title}</h1>  
            <h2>{day}</h2>
            <h2>{section}</h2>          
        </StyledFooter>
    );
}

const StyledFooter = styled.footer`
    width: 100%;
    height: 90px;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    background-color: aqua;
    padding: 20px;
  
    h1{
    background-color: #E8833A;
  }

`



export default Footer;