import { configureStore } from "@reduxjs/toolkit";
import employeesSlice from "./reducerListEmployee"

const store = configureStore({
    reducer: {
        infoEmployee: employeesSlice,
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;