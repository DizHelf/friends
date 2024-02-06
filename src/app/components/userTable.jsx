import React from "react";
import PropTypes from "prop-types";
import User from "./user";
import TableHeader from "./tableHeader";

const UserTable = ({ users, sortOptions, onSort, ...rest }) => {

    const column = [
        { name: "Имя", iter: "name" },
        { name: "Качества" },
        { name: "Профессия", iter: "profession.name" },
        { name: "Встретился, раз", iter: "completedMeetings" },
        { name: "Оценка", iter: "rate" },
        { name: "Избранное", iter: "bookmark" }
    ];

    return (
        <table className="table">
            <TableHeader { ...{ sortOptions, onSort, column }}/>
            <tbody>
                {users.map((user) => (
                    <User {...rest} {...user} key={user._id} />
                ))}
            </tbody>
        </table>
                
    );
};

UserTable.propTypes = {
    users: PropTypes.array.isRequired,
    sortOptions: PropTypes.object.isRequired,
    onSort: PropTypes.func.isRequired
};

export default UserTable;
