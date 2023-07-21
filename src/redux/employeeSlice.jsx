import {createSlice} from "@reduxjs/toolkit";

const initialState = []

const employeesSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        employeeAdded(state, action) {
            state.push(action.payload)
        },
    }
})

export const selectAllEmployees = (state) => state.employees

export const { employeeAdded } = employeesSlice.actions

export default employeesSlice.reducer