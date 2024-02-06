import React from "react";
import PropTypes from "prop-types";
import User from "./user";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const UserTable = ({ users, sortOptions, onSort, ...rest }) => {

    const column = [
        { name: "Имя", path: "name" },
        { name: "Качества" },
        { name: "Профессия", path: "profession.name" },
        { name: "Встретился, раз", path: "completedMeetings" },
        { name: "Оценка", path: "rate" },
        { name: "Избранное", path: "bookmark" }
    ];

    return (
        <table className="table">
            <TableHeader { ...{ sortOptions, onSort, column }}/>
            <TableBody {...{ column, data: users }}/>
        </table>
                
    );
};

UserTable.propTypes = {
    users: PropTypes.array.isRequired,
    sortOptions: PropTypes.object.isRequired,
    onSort: PropTypes.func.isRequired
};

export default UserTable;
