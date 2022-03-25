import reactDom from "react-dom";

import App from "./components/App";

import '../src/assets/css/style.css';
import '../src/assets/css/reset.css';


reactDom.render(<App /> , document.querySelector(".root"));
