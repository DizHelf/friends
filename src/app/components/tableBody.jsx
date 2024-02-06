import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const TableBody = ({ column, data }) => {
    return (
        <tbody>
            {data.map(item => 
                <tr key={item._id}>
                    {column.map((column) => 
                        <td key={column.name}>{_.get(item, column.path)}</td>
                    )}
                </tr>
            )}
        </tbody>
    );
};

TableBody.propTypes = {
    column: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired
};

export default TableBody;
