import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const TableBody = ({ column, data }) => {

    const renderFunction = (item, column) => {
        if (column.component) {
            const component = column.component;
            if (typeof component === "function") {
                return component(item);
            }
            return column.component;
        }

        return _.get(item, column.path);
    };

    return (
        <tbody>
            {data.map(item => 
                <tr key={item._id}>
                    {column.map((column) => 
                        <td key={column.name}>
                            {renderFunction(item, column)}
                        </td>
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
