import {createSlice} from "@reduxjs/toolkit";
import {apiCallBegan} from "./middleware/api"

const slice = createSlice({
    name: "projects",
    initialState: {
        list: [],
        selectedProject: {}
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
        },
        projectUpdated: (projects, action) => {
            // const {data} = action.payload;
            // const idx = projects.list.findIndex(project => project.id === data.id);
            // projects.list[idx] = data;
        },
        projectFound: (projects, action) => {
            const {data} = action.payload;
            projects.selectedProject = data;
        }
    }
})

const url = "/project"
const {projectAdded, projectsLoaded, projectUpdated, projectFound} = slice.actions;
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

export const updateProject = (project, history) => (dispatch, getState) => {
    return dispatch(
        apiCallBegan({
            url,
            history,
            method: "post",
            data: project,
            onSuccess: projectUpdated.type
        })

    )
}

export const findProjectById = projectId => (dispatch, getState) => {
    return dispatch(
        apiCallBegan({
            url: url + "/" + projectId,
            method: "get",
            onSuccess: projectFound.type
        })
    )
}