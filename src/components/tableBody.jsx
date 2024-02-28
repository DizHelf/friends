import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { Link } from "react-router-dom";

const TableBody = ({ column, data }) => {

    const renderFunction = (item, column) => {
        if (column.component) {
            const component = column.component;
            if (typeof component === "function") {
                return component(item);
            }
            return column.component;
        }

        if (column.path === "name") {
            return (<Link
                to={`/posts/${item._id}`}
                className="text-decoration-none"
            >
                    {_.get(item, column.path)}
            </Link>
        )}

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
