import { BrowserRouter, Routes, Route} from "react-router-dom";
import Top from "./Top";
import Movies from "./Movies";
import AvailableTime from "./AvailableTime";
import { useState, useEffect } from "react";
import api from "./api";
import Seats from "./Seats";
import Sucess from "./Sucess";


function App(){

    const [infosUser, setInfos] = useState({ ids:[], name:'', cpf:''});

    console.log('selecteds',infosUser.seats);

    function SetSeat(value){
        const thereIs  = infosUser.ids.indexOf(value);
        if(thereIs === -1){
            infosUser.ids.push(value);
            infosUser.ids.sort(function compara(a,b){return a-b}); //compara pela grandeza e não pelo unicode
            setInfos({...infosUser, ids:[...infosUser.ids]});
        }else{
            infosUser.ids.splice(thereIs, 1);
            setInfos({...infosUser, ids:[...infosUser.ids]});
        }
    }

    return(
        <>
        <BrowserRouter>
            <Top />
            <Routes>
                <Route path="/" element={<Movies />}></Route>
                <Route path="/sessoes/:idFilme" element={<AvailableTime />}></Route>
                <Route path="/assentos/:idSessao" element={<Seats setSeat={SetSeat} setDatas={setInfos} infosUser={infosUser}/>} ></Route>
                <Route path="/sucess" element={<Sucess datas={infosUser}/>}></Route>
            </Routes>
            
        </BrowserRouter>
       
        </>
    
    );
}

export default App;

 
