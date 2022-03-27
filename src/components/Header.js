import styled from "styled-components";

function Header(){
    return(
        <Top>
            <h1>CINEFLEX</h1>
        </Top>
    )
}

const Top = styled.div `

    position: relative;
    background-color: #C3CFD9;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: #E8833A;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    padding: 10px;
`

export default Header;