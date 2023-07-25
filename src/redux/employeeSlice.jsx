import {createSlice} from "@reduxjs/toolkit";

const initialState = [
    {
        firstName: "Maya",
        lastName:"Labeille",
        socialNumber: "87647653674370987",
        birthDate: "January 25th, 1984",
        startDate: "July 3rd, 2023",
        streetName: "1 sunflower",
        city: "Petal",
        zipCode: "12345",
        state: {name: "California", abbreviation: "CA"},
        contractType: "Full-Time",
        department: "sales"
    },
    {
        firstName: "Thomas",
        lastName:"Coulet",
        socialNumber: "0868657674370654",
        birthDate: "February 10th, 1990",
        startDate: "July 23rd, 2023",
        streetName: "5 Yellow Star",
        city: "Moon",
        zipCode: "87654",
        state: {name: "Alabama", abbreviation: "AL"},
        contractType: "Part-Time",
        department: "marketing"
    },
]

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