import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EmployeeData {
    firstName: string,
    lastName: string,
    dateOfBirth: string | null,
    startDate: string | null,
    street: string,
    city: string,
    state: string,
    zipCode: string,
    department: string,
}

const initialStateEmployees: EmployeeData[] = []

const employeesSlice = createSlice({
    name: 'saveStateEmployee',
    initialState: initialStateEmployees,
    reducers: {
        addEmployee: (state, action: PayloadAction<EmployeeData>) => {
            state.push(action.payload)
        }
    }
})

export const {addEmployee} = employeesSlice.actions;
export default employeesSlice.reducer