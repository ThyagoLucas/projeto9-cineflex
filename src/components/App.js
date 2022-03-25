import { BrowserRouter, Routes, Route} from "react-router-dom";
import Top from "./Top";
import Movies from "./Movies";
import AvailableTime from "./AvailableTime";
import { useState, useEffect } from "react";
import api from "./api";
import Seats from "./Seats";


function App(){
    const [movieList, setFilmes] = useState([]);
    
    return(
        <>
        <BrowserRouter>
            <Top />
            <Routes>
                <Route path="/" element={<Movies />}></Route>
                <Route path="/horarios-disponiveis/:movieId" element={<AvailableTime />}></Route>
                <Route path="/available-seats/:sectionId" element={<Seats/>} ></Route>
            </Routes>
            
        </BrowserRouter>
       
        </>
    
    );
}

export default App;

 
