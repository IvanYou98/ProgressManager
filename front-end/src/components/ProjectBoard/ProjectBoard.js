import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Backlog from "./Backlog";
import {connect} from "react-redux";
import {loadTasks} from "../../store/backlog";

class ProjectBoard extends Component {
    projectId = this.props.match.params.id;

    componentDidMount() {
        this.props.loadTasks(this.projectId);
        console.log(this.props.errors);
    }


    render() {
        const {tasks, errors} = this.props;

        const boardAlgo = (errors, tasks) => {
            if (tasks.length < 1) {
                if (errors.data.projectIdentifier) {
                    return (
                        <div className="alert alert-danger text-center" role="alert">
                            {errors.data.projectIdentifier}
                        </div>
                    )
                } else {
                    return (
                        <div className="alert alert-info text-center" role="alert">
                            No Project Tasks on this board
                        </div>
                    )
                }
            } else {
                return <Backlog tasks={tasks}/>;
            }
        }

        return (<div className="container">
                <Link to={`/addProjectTask/${this.projectId}`} className="btn btn-primary mb-3">
                    <i className="fas fa-plus-circle"> Create Project Task</i>
                </Link>
                {boardAlgo(errors, tasks)}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    tasks: state.backlog.taskList,
    errors: state.errors
})

export default connect(mapStateToProps, {loadTasks})(ProjectBoard);