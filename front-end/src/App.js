import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import AddProject from "./components/project/AddProject";
import Dashboard from "./components/Dashboard";
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";
import UpdateProject from "./components/project/UpdateProject";

const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <NavBar/>
                    <Route path="/dashBoard" exact component={props => <Dashboard {...props} />}/>
                    <Route path="/addProject" exact component={props => <AddProject {...props} />}/>
                    <Route path="/updateProject/:id" exact component={props => <UpdateProject {...props} />}/>
                    <Route path="/deleteProject/:id" exact component={props => <Dashboard {...props} />}/>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
