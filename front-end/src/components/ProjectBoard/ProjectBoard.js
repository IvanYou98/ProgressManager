import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Backlog from "./Backlog";
import {connect} from "react-redux";
import {loadTasks} from "../../store/backlog";

class ProjectBoard extends Component {
    projectId = this.props.match.params.id;

    componentDidMount() {
        this.props.loadTasks(this.projectId);
    }


    render() {
        const {tasks} = this.props;
        return (<div className="container">
                <Link to={`/addProjectTask/${this.projectId}`} className="btn btn-primary mb-3">
                    <i className="fas fa-plus-circle"> Create Project Task</i>
                </Link>
                <Backlog tasks = {tasks} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    tasks: state.backlog.taskList
})

export default  connect(mapStateToProps, {loadTasks})(ProjectBoard);