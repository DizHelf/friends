import React from 'react';
import _ from "lodash";

const Pagination = (props) => {
    const {handlerPageChange, pageSize, itemsCount} = props
  
    const pageCounter = Math.ceil(itemsCount/ pageSize)
    console.log(pageCounter);
    
    
    return ( 
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {_.range(1, pageCounter+1).map(page=><li key={page} className="page-item"><a className="page-link" href="#">{page}</a></li>)}
            </ul>
        </nav>
    );
}
 
export default Pagination;