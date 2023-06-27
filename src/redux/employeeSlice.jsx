import {createSlice} from "@reduxjs/toolkit";
import {number} from "prop-types";

const initialState = [{
    firstName: "",
    lastName: "",
    startDate: "",
    department: "",
    birthDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: number
}]

const employeesSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        // employeeAdded(state, action) {
        //     state.push(action.payload)
        // },
    }
})

export const selectAllEmployees = (state) => state.employees

export default employeesSlice.reducer