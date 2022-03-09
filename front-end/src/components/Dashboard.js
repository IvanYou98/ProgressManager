import React, {Component} from 'react';
import ProjectItem from "./project/ProjectItem";
import CreateProjectItemButton from "./project/CreateProjectItemButton";
import {loadProjects} from "../store/project";
import {connect} from "react-redux";


class Dashboard extends Component {
    state = {
        projects: {}
    }

    componentDidMount() {
        this.props.loadProjects();
    }

    render() {
        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">Projects</h1>
                            <br/>
                            <CreateProjectItemButton/>
                            <br/>
                            <hr/>
                            <ProjectItem/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    projects: state.projects.list
})

const mapDispatchToProps = (dispatch) => ({
    loadProjects: () => dispatch(loadProjects())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);