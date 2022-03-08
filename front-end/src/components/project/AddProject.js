import React from 'react';
import Form from "../common/Form";
import {connect} from "react-redux";
import {addProject, loadProjects} from "../../store/project";


class AddProject extends Form {

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        this.props.addProject(this.state.data, this.props.history);
    }

    render() {
        return (
            <div>
                <div className="project">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <h5 className="display-4 text-center">Create Project form</h5>
                                <hr/>
                                <form onSubmit={this.handleSubmit}>
                                    {this.renderInput("projectName", "Project Name", "text")}
                                    {this.renderInput("projectIdentifier", "Unique Project ID", "text")}
                                    {this.renderTextArea("Project Description", "description")}
                                    <h6>Start Date</h6>
                                    {this.renderInput("start_date", 'Start Date', "date")}
                                    <h6>Estimated End Date</h6>
                                    {this.renderInput("end_date", "End Date", "date")}
                                    {this.renderSubmitBtn("btn btn-primary btn-block mt-4")}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addProject: (project, history) => dispatch(addProject(project, history))
});

export default connect(null, mapDispatchToProps)(AddProject);
