import React from "react"
import {Route} from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import CreateFormConteiner from "./Components/Forms/CreateForm/CreateFormConteiner";

function App() {
    return (
        <div className="App">
            <Route exact path="/" render={() => <Home/>}/>
            <Route path ="/form" render={() => <CreateFormConteiner/>}/>
        </div>
    );
}

export default App;
