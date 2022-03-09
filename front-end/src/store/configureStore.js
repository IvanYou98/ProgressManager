import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import reducer from './reducer'
import api from "./middleware/api";

const func = () => {
    return configureStore({
            reducer,
            middleware: [
                ...getDefaultMiddleware(),
                api
            ]
        }
    );
}
export default func;