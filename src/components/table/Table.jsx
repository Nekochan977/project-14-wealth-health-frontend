import {DataTable} from "primereact/datatable";
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import {Fragment, useEffect, useState} from "react";
import {EmployeesData} from "./service/EmployeesData";
import {InputText} from "primereact/inputtext";
import {useSelector} from "react-redux";

// test redux
import {selectAllEmployees} from "../../redux/employeeSlice";


const Table = () => {
    // react Hook For State Handler
    const employeesList = useSelector(selectAllEmployees)
    console.log(employeesList)



    const [employees, setEmployees] = useState([]);
    const [globalFilter, setGlobalFilter] = useState(null);
    const [employeesDialog, setEmployeesDialog] = useState(false);
    const [deleteEmployeesDialog, setDeleteEmployeesDialog] = useState(false);

    // useEffect(() => {
    //     EmployeesData.getData().then(data => setEmployees(data))
    // },[])

    // console.log(employees)

    const editEmployees = (employees) => {
        setEmployees({ ...employees });
        setEmployeesDialog(true);
    };

    const confirmDeleteEmployees = (employees) => {
        setEmployees(employees);
        setDeleteEmployeesDialog(true);
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <Fragment>
                <Button icon="pi pi-pencil" rounded outlined className="mr-2" onClick={() => editEmployees(rowData)} />
                <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => confirmDeleteEmployees(rowData)} />
            </Fragment>
        );
    };

    const header = (
        <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
            <h2 className="m-0 text-indigo-700">Current Employees</h2>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    )



    return(
        <div className={"container mx-auto px-4"}>
            <DataTable
                value={employeesList}
                // value={employees}
                sortField="name"
                sortOrder={-1}
                tableStyle={{ minWidth: '30rem' }}
                paginator
                showGridlines
                rows={5}
                rowsPerPageOptions={[5, 10, 25]}
                globalFilterFields={['lastName']}
                globalFilter={globalFilter}
                header={header}>
                <Column field="firstName" header="First Name" sortable style={{ width: '20%', minWidth:'12rem' }}></Column>
                <Column field="lastName" header="Last Name" sortable style={{ width: '20%', minWidth:'12rem'  }}></Column>
                <Column field="startDate" header="Start date" sortable style={{ width: '20%', minWidth:'12rem'  }}></Column>
                <Column field="contractType" header="Contract Type" sortable style={{ width: '20%', minWidth:'12rem'  }}></Column>
                <Column field="department" header="Department" sortable style={{ width: '20%', minWidth:'12rem'  }}></Column>
                <Column field="birthDate" header="Date of Birth" sortable style={{ width: '20%', minWidth:'12rem'  }}></Column>
                <Column field="streetName" header="Street" sortable style={{ width: '20%', minWidth:'12rem'  }}></Column>
                <Column field="city" header="City" sortable style={{ width: '20%', minWidth:'12rem'  }}></Column>
                <Column field="state.name" header="State" sortable style={{ width: '20%', minWidth:'12rem'  }}></Column>
                <Column field="zipCode" header="Zip Code" sortable style={{ width: '20%', minWidth:'12rem'  }}></Column>
                {/*<Column field="address" header="Address" sortable style={{ width: '20%' }}></Column>*/}
                {/*<Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '5rem' }}></Column>*/}
            </DataTable>
        </div>
    )
}
export default Table
