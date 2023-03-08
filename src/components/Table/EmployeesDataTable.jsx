import { useMemo } from "react";
import { useGlobalFilter, useSortBy, usePagination, useTable } from "react-table";

//Components
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";

//CSS
import "../../styles/components/EmployeesDataTable.css";
import "../../styles/responsive/components/EmployeesDataTable.css";

function EmployeesDataTable({employees})
{
    const data = useMemo(() => employees, []);
    const columns = useMemo(() => [
        {
            Header: "First Name",
            accessor: "firstName",
        },
        {
            Header: "Last Name",
            accessor: "lastName",
        },
        {
            Header: "Start Date",
            accessor: "startDate",
        },
        {
            Header: "Department",
            accessor: "department",
        },
        {
            Header: "Date of Birth",
            accessor: "birthDate",
        },
        {
            Header: "Street",
            accessor: "street",
        },
        {
            Header: "City",
            accessor: "city",
        },
        {
            Header: "State",
            accessor: "state",
        },
        {
            Header: "Zip Code",
            accessor: "zipCode",
        },
    ], []);
    
    const {
        //Base
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        page,
        prepareRow,

        //Pagination
        gotoPage,
        nextPage,
        previousPage,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        setPageSize,
        state: { pageIndex, pageSize },

        //SearchBar (Global)
        state,
        preGlobalFilteredRows,
        setGlobalFilter,

    } = useTable({columns, data, initialState: { pageIndex: 0 }}, useGlobalFilter, useSortBy, usePagination);
    
    return (
        <section className="employee-list">

            <SearchBar preGlobalFilteredRows={preGlobalFilteredRows} globalFilter={state.globalFilter} setGlobalFilter={setGlobalFilter}/>

            <div className="employee-list__container">
                <table className="employee-list__container__table" {...getTableProps()}>
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {column.render('Header')}
                                        <span>{column.isSorted ? column.isSortedDesc ? ' 🔽' : ' 🔼' : ''}</span>
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>


                    <tbody {...getTableBodyProps()}>
                        {page.map((row, i) => {
                            prepareRow(row)
                            return(
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) =>(
                                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                    ))}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            <Pagination gotoPage={gotoPage} previousPage={previousPage} nextPage={nextPage} canPreviousPage={canPreviousPage} canNextPage={canNextPage} pageCount={pageCount} pageIndex={pageIndex} pageOptions={pageOptions} pageSize={pageSize} setPageSize={setPageSize}  preGlobalFilteredRows={preGlobalFilteredRows} page={page}/>
        </section>
    )
}

export default EmployeesDataTable;