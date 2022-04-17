import {BrowserRouter ,Switch ,Route} from "react-router-dom";
import React  from 'react';
import Login from "./pages/Login";
import Allclubs from "./pages/allclubs";
import Schedule from "./pages/Schedule";
import home from "./pages/home";

import description from "./pages/description";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Switch>
    
    
    <Route path="/Allclubs" exact component={Allclubs} />
    <Route path="/" exact component={Login} />
    <Route path="/home" exact component={home} />
    <Route path="/description" exact component={description} />

    <Route path="/schedule" exact component={Schedule} />

    

    </Switch>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
