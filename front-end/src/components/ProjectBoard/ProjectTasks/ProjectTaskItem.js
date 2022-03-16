import React, {Component} from 'react';

class ProjectTaskItem extends Component {

    render() {
        const {task} = this.props;

        let priorityString;
        let priorityClass;

        if (task.priority === 1) {
            priorityString = "HIGH";
            priorityClass = "bg-danger text-light";
        }
        if (task.priority === 2) {
            priorityString = "MEDIUM";
            priorityClass = "bg-warning text-light";
        }
        if (task.priority === 3) {
            priorityString = "LOW";
            priorityClass = "bg-info text-light";
        }

        return (
            <div className="card mb-1 bg-light">
                <div className= {"card-header text-primary " + priorityClass}>
                    ID:{task.projectSequence} -- Priority: {priorityString}
                </div>
                <div className="card-body bg-light">
                    <h5 className="card-title">{task.summary}</h5>
                    <p className="card-text text-truncate ">
                        {task.acceptanceCriteria}
                    </p>
                    <a href="/" className="btn btn-primary">
                        View / Update</a>

                    <button className="btn btn-danger ml-4">
                        Delete
                    </button>
                </div>
            </div>
        );
    }
}


export default ProjectTaskItem;