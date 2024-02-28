import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, sortOptions, column }) => {

    const renderIconSort = (item) => {
        if (sortOptions.iterates === item.path) {
            if (sortOptions.order === "asc") return <i className="bi bi-caret-up-fill"/>;
            else return <i className="bi bi-caret-down-fill"/>;
        };

        return null;
    };

    const handleSort = (item) => {
        if (sortOptions.iterates === item) {
            onSort(prev => ({ ...prev, order: prev.order === "asc" ? "desc" : "asc" }));
        } else {
            onSort({ iterates: item, order: "asc" });
        }
    };

    return (
        <thead>
            <tr>
            {
                column.map((colum) => 
                    <th key={colum.name} 
                        role="button"
                        onClick={colum.path ? () => handleSort(colum.path) : undefined} 
                        scope="col">
                        {colum.name}
                        {renderIconSort(colum)}
                    </th>

                )
            }
            </tr>
        </thead>
    );
};

TableHeader.propTypes = {
    sortOptions: PropTypes.object.isRequired,
    onSort: PropTypes.func.isRequired,
    column: PropTypes.array.isRequired
};

export default TableHeader;
