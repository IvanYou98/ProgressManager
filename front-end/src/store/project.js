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
            projects.list = action.payload;
        },
        projectAdded: (projects, action) => {
            projects.list.push(
                action.payload
            )
        }
    }
})

const url = "/project"
const {projectAdded, projectsLoaded} = slice.actions;
export default slice.reducer;

export const addProject = project => (dispatch, getState) => {
    return dispatch(
        apiCallBegan({
            url,
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