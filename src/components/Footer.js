import styled from 'styled-components';

function Footer(porps){
    const {title, img, day, section} = porps;
    return(
        <StyledFooter >
                
                <img src={img} alt={`Imagem do filme ${title}`}/>
                <div>
                    <h1>{title}</h1> 
                    <div className='text'>
                        <h2>{day}</h2>
                        <h2>{section}</h2>
                    </div>
                </div>    
          
                 
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
    justify-content: flex-start;
    background-color: #DFE6ED;
    padding: 10px;
    h1{
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        color:#293845;
        display: flex;
        align-items: center;
    }
    img{
        height: 100%;
        margin-right: 10px;
    }
    h2{
        color:#293845;
        margin-right: 10px;
        margin-top:4px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
    }
    .text{
        width: 100%;
        display:flex;

    }
    @media (min-width: 500px){
        
            width:500px;
            padding:0px;
      }
    
`
export default Footer;