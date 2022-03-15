import {createSlice} from "@reduxjs/toolkit";
import {getErrors} from "./errors";
import axios from "axios";

const slice = createSlice({
    name: "backlogs",
    initialState: {
        taskList: [],
        selectedTask: {}
    },
    reducers: {
        tasksLoaded: (state, action) => {
            const {data} = action.payload;
            state.taskList = data;
        },

        taskFound: (state, action) => {
            const {data} = action.payload;
            state.selectedTask = data;
        },

        taskDeleted: (state, action) => {
            const {projectSequence} = action.payload;
            state.taskList = state.taskList.filter(task => task.projectSequence !== projectSequence)
        }
    }
});

export const {tasksLoaded, taskFound, taskDeleted} = slice.actions;
export default slice.reducer;


const baseURL = "http://localhost:8080/api/backlog"

export const saveTask = (projectId, task, history) => async dispatch => {
    try {
        await axios.post(baseURL + "/" + projectId, task);
        history.push(`/projectBoard/${projectId}`);
        dispatch({
            type: getErrors,
            payload: {}
        })
    } catch (err) {
        dispatch({
            type: getErrors,
            payload: {
                errors: err.response.data
            }
        })
    }
}

