import {BrowserRouter ,Switch ,Route} from "react-router-dom";
import React  from 'react';
import Login from "./pages/Login";
import Allclubs from "./pages/allclubs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Switch>
    
    <Route path="/Allclubs" exact component={Allclubs} />
    <Route path="/" exact component={Login} />
    

    </Switch>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
