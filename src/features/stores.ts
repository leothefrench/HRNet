import { configureStore } from "@reduxjs/toolkit";
import employeesSlice from "./reducerListEmployee"

const store = configureStore({
    reducer: {
        infoEmployee: employeesSlice,
    },
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;

export type RootState = ReturnType<typeof store.getState>;