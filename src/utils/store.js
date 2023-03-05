import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "../features/employee";

const store = configureStore({
    reducer: {
        employee: employeeReducer,
    }
});

export default store;