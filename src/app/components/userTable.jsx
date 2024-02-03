import React from "react";
import PropTypes from "prop-types";
import User from "./user";

const UserTable = ({ users, onSort, sortOptions, ...rest }) => {
    
    const handleSort = (item) => {
        if (sortOptions.iterates === item) {
            onSort(prev => ({ ...prev, order: prev.order === "asc" ? "desc" : "asc" }));
        } else {
            onSort({ iterates: item, order: "asc" });
        }
    };

    return (
        <table className="table">
            <thead>
                <tr>
                    <th onClick={() => handleSort("name")} scope="col">Имя</th>
                    <th scope="col">Качества</th>
                    <th onClick={() => handleSort("profession.name")} scope="col">Профессия</th>
                    <th onClick={() => handleSort("completedMeetings")} scope="col">Встретился, раз</th>
                    <th onClick={() => handleSort("rate")} scope="col">Оценка</th>
                    <th onClick={() => handleSort("bookmark")} scope="col">Избранное</th>
                    <th />
                </tr>
            </thead>
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
    onSort: PropTypes.function,
    sortOptions: PropTypes.object
};

export default UserTable;
