import  Nav  from "./Nav";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./Header";
import Line from "./Line";
import Main from "./Main";

function App() {
  return (
    
    <div>
      <Nav />
      <Header />
      <Line />
      <Main />
    
    </div>
    
  );
}

export default App;
