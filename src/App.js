import  Nav  from "./Nav";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <Router>
    <div>
    <Routes>
        <Route path='/checkout'> 
        <Nav />
       
        </Route>
        <Route path='/login'> <h1>login page</h1> </Route>
        <Route path='/'> 
        

        
        
        
         </Route>
      </Routes>
      
      
    </div>
    </Router>
  );
}

export default App;
