import React from "react";
import PropTypes from "prop-types";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ sortOptions, onSort, column, data, children }) => {

    return (
        <table className="table">
            {children || <>
                <TableHeader { ...{ sortOptions, onSort, column }}/>
                <TableBody {...{ column, data }}/>
            </>}
        </table>
    );
};

Table.propTypes = {
    column: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    sortOptions: PropTypes.object.isRequired,
    onSort: PropTypes.func.isRequired,
    children: PropTypes.arr
};

export default Table;
