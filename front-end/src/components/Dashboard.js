import React, {Component} from 'react';
import ProjectItem from "./project/ProjectItem";
import "bootstrap/dist/css/bootstrap.min.css";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1 className="alert-danger">Welcome to the Dashboard</h1>
                <ProjectItem/>
            </div>
        );
    }
}

export default Dashboard;