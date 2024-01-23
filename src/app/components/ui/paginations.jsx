import React from 'react';
import _, { property } from "lodash";
import PropTypes from 'prop-types';

const Pagination = (props) => {
    const {onPageChange, pageSize, itemsCount, currentPage} = props
    const pageCounter = Math.ceil(itemsCount/ pageSize)
    
    return (
        pageCounter > 1 ?
        <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {_.range(1, pageCounter+1).map(page=> <li onClick={() => onPageChange(page)} key={page} className="page-item">
                        <button className={"page-link " + (page===currentPage?"active":"")}>{page}</button>
                    </li>)}
                </ul>
        </nav>:
        <></>
    );
}
Pagination.prototype={
    onPageChange: PropTypes.func.isRequired, 
    pageSize: PropTypes.number.isRequired, 
    itemsCount: PropTypes.number.isRequired, 
    currentPage: PropTypes.number.isRequired
}
 
export default Pagination;