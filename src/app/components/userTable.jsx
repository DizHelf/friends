import React from "react";
import PropTypes from "prop-types";
import Bookmark from "./bookmark";
import QualityList from "./qualityList";
import Table from "./table";

const UserTable = ({ users, sortOptions, onSort, onDelete, onToggleBookMark, ...rest }) => {

    const column = [
        { name: "Имя", path: "name" },
        { name: "Качества", component: (item) => <QualityList qualities={item.qualities}/> },
        { name: "Профессия", path: "profession.name" },
        { name: "Встретился, раз", path: "completedMeetings" },
        { name: "Оценка", path: "rate" },
        { name: "Избранное", path: "bookmark", component: (item) => renderBookmark(item) },
        { name: "Удалить", component: (item) => renderButton(item) }
    ];

    const renderButton = (item) => {
       return <button onClick={() => onDelete(item._id)} className="btn btn-danger">delete</button>;
    };

   const renderBookmark = (item) => {
        return <Bookmark status={item.bookmark} onClick={() => onToggleBookMark(item._id)}></Bookmark>;
   };

    return (
            <Table 
                sortOptions={sortOptions} 
                onSort={onSort}
                column={column}
                data={users}
            >
            </Table>
    );
};

UserTable.propTypes = {
    users: PropTypes.array.isRequired,
    sortOptions: PropTypes.object.isRequired,
    onSort: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggleBookMark: PropTypes.func.isRequired
};

export default UserTable;
