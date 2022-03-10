import React from 'react';
import Form from "../common/Form";
import {connect} from "react-redux";
import {updateProject, findProjectById} from "../../store/project";


class UpdateProject extends Form {
    state = {
        data: {
            projectName: "",
            projectIdentifier: "",
            description: "",
            start_date: "",
            end_date: ""
        },
        errors: {}
    };

    componentDidMount() {
        const projectId = this.props.match.params.id;
        this.props.findProjectById(projectId);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        const {project} = nextProps;
        this.setState({
            data: project
        })
        // console.log(project)
    }


    handleSubmit = e => {
        e.preventDefault();
        this.props.updateProject(this.state.data, this.props.history);
    }


    render() {
        return (
            <div>
                <div className="project">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <h5 className="display-4 text-center">Update Project form</h5>
                                <hr/>
                                <form onSubmit={this.handleSubmit}>
                                    {this.renderInput("projectName", "Project Name", "text")}
                                    {this.renderInput("projectIdentifier", "Unique Project ID", "text", true)}
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

const mapStateToProps = state => ({
    errors: state.errors,
    project: state.projects.selectedProject
})

// const mapDispatchToProps = (dispatch) => ({
//     addProject: project => dispatch(updateProject(project)),
//     findProjectById: projectId => dispatch(findProjectById(projectId)),
// });

export default connect(
    mapStateToProps,
    {
        findProjectById,
        updateProject
    })(UpdateProject);
