import {DataTable} from "primereact/datatable";
import { Column } from 'primereact/column';
import { useState} from "react";
import {InputText} from "primereact/inputtext";
import {useSelector} from "react-redux";

// Employees data redux
import {selectAllEmployees} from "../../redux/employeeSlice";


const Table = () => {
    // react Hook For State Handler
    const employeesList = useSelector(selectAllEmployees)

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
                value={employeesList}
                sortField="name"
                sortOrder={-1}
                tableStyle={{ minWidth: '30rem' }}
                paginator
                showGridlines
                rows={5}
                rowsPerPageOptions={[5, 10, 25]}
                globalFilterFields={['firstName','lastName', 'city', 'state.name', 'department' ]}
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
            </DataTable>
        </div>
    )
}
export default Table
