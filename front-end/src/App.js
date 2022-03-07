import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import AddProject from "./components/project/AddProject";
import Dashboard from "./components/Dashboard";

function App() {
    return (
        <BrowserRouter>
            <div>
                <NavBar/>
                <Route path="/dashBoard" exact component={Dashboard}/>
                <Route path="/addProject" exact component={AddProject}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
