//CSS
import "../../styles/components/Pagination.css"
import "../../styles/responsive/components/Pagination.css"

function Pagination({gotoPage, previousPage, nextPage, canPreviousPage, canNextPage, pageCount, pageIndex, pageOptions, pageSize, setPageSize, preGlobalFilteredRows, page})
{
    
    const total = preGlobalFilteredRows.length;
    const nbItem = page.length + (pageSize * pageIndex);
    
    return (
        <div className="pagination">
            {/*Information*/}
            <div className="pagination__information">
                <p className="pagination__information__itemsCount">Browsed items : {nbItem} of {total}</p>
                {/*<p className="pagination__page-information__pagesCount">Page {pageIndex + 1} of {pageOptions.length}</p>*/}      
            </div>
            
            
            <div className="pagination__page-information__container">
                <label className="pagination__page-information__container__label" htmlFor="pageNumber">Go to page : </label>
                <p className="pagination__page-information__container__pageCount"><input className="pagination__page-information__container__input" id="pageNumber" type="number" defaultValue={pageIndex + 1} onChange={(e) => {const page = e.target.value ? Number(e.target.value) - 1 : 0; gotoPage(page);}}/> of {pageOptions.length}</p>
            </div>

            

            {/*Controls*/}
            <div className="pagination__controls">

                <select className="pagination__controls__items-number" value={pageSize} onChange={(e) => {setPageSize(Number(e.target.value));}}>
                    {[10, 20, 30, 40, 50].map((pageSize) => (
                        <option key={pageSize} value={pageSize}> Show {pageSize} </option>
                    ))}
                </select>
                <div className="btn-group">
                    <button className="pagination__controls__btn" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{"<<"}</button>
                    <button className="pagination__controls__btn" onClick={() => previousPage()} disabled={!canPreviousPage}>{"<"}</button>
                    <button className="pagination__controls__btn" onClick={() => nextPage()} disabled={!canNextPage}>{">"}</button>
                    <button className="pagination__controls__btn" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{">>"}</button>
                </div>        
            </div>
        </div>
    )
}

export default Pagination;