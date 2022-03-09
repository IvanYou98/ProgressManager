import {createAction, createSlice} from "@reduxjs/toolkit";
import api, {apiCallBegan} from "./middleware/api"

const slice = createSlice({
    name: "projects",
    initialState: {
        list: []
    },
    reducers: {
        // fetch projects into lists
        projectsLoaded: (projects, action) => {
            const {data} = action.payload;
            projects.list = data;
        },
        projectAdded: (projects, action) => {
            const {data} = action.payload;
            projects.list.push(data);
        }
    }
})

const url = "/project"
const {projectAdded, projectsLoaded} = slice.actions;
export default slice.reducer;

export const addProject = (project, history) => (dispatch, getState) => {

    return dispatch(
        apiCallBegan({
            url,
            history,
            method: "post",
            data: project,
            onSuccess: projectAdded.type
        })
    )
}

export const loadProjects = () => (dispatch, getState) => {
    return dispatch(
        apiCallBegan({
            url: url + "/all",
            method: 'get',
            onSuccess: projectsLoaded.type
        })
    )
}