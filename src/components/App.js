import { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Movies from "./Movies";
import AvailableTime from "./AvailableTime";
import Seats from "./Seats";
import Sucess from "./Sucess";
import Header from "./Header";


function App(){

    const [infosUser, setInfos] = useState({ ids:[], name:'', cpf:''});
    const [resume, setResume] = useState({seat:[], name:'', cpf:'', movie:'', day:'', section:''});
    
    function SetSeat(numberSeat,value){
        
        const thereIs  = infosUser.ids.indexOf(value);
        
        if(thereIs === -1){
            setInfos({...infosUser, ids:[...infosUser.ids, value]});
            resume.seat.push(numberSeat);
            resume.seat.sort(function compara(a,b){return a-b}); //compara pela grandeza e não pelo unicode
            setResume({...resume, seat:[...resume.seat]});
        }else{
            infosUser.ids.splice(thereIs, 1);
            resume.seat.splice(thereIs, 1);
            setInfos({...infosUser, ids:[...infosUser.ids]});
            setResume({...resume, seat:[...resume.seat]});
        }
    }

    return(
        <>
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Movies />}></Route>
            <Route path="/sessoes/:idFilme" element={<AvailableTime />}></Route>
            <Route path="/assentos/:idSessao" element={<Seats   setSeat={SetSeat} 
                                                                setDatas={setInfos}
                                                                infosUser={infosUser}
                                                                resume={resume}
                                                                setResume={setResume}/>} ></Route>
            <Route path="/sucess" element={<Sucess resume={resume}/>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    );
}

export default App;

 
