import {DataTable} from "primereact/datatable";
import { Column } from 'primereact/column';
import {useEffect, useState} from "react";
import {EmployeesData} from "./service/EmployeesData";
import {InputText} from "primereact/inputtext";


const Table = () => {
    // react Hook For State Handler
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        EmployeesData.getData().then(data => setEmployees(data))
    },[])

    // console.log(employees)
    const [globalFilter, setGlobalFilter] = useState(null);

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
                value={employees}
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
                <Column field="firstName" header="First Name" sortable style={{ width: '20%' }}></Column>
                <Column field="lastName" header="Last Name" sortable style={{ width: '20%' }}></Column>
                <Column field="address" header="Address" sortable style={{ width: '20%' }}></Column>
            </DataTable>
        </div>
    )
}
export default Table
