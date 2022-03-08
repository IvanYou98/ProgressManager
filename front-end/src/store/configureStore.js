import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import reducer from './project'
import api from "./middleware/api";

export default function () {
    return configureStore({
            reducer,
            middleware: [
                ...getDefaultMiddleware(),
                api
            ]
        }
    );
}