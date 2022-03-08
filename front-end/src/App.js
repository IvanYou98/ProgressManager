import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import AddProject from "./components/project/AddProject";
import Dashboard from "./components/Dashboard";
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";

const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <NavBar/>
                    <Route path="/dashBoard" exact component={Dashboard}/>
                    <Route path="/addProject" exact component={AddProject}/>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
