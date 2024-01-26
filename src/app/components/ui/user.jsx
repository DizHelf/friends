import React from "react";
import Qualitie from "./qualitie";
import Bookmark from "./bookmark";

const User = (props) => {
    const { user, handleDelete, onToggleBookMark } = props;

    return (
        <tr key={user._id}>
            <td>{user.name}</td>
            <td>
                {user.qualities.map((item) => (
                    <Qualitie key={item._id} item={item} />
                ))}
            </td>
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate} /5</td>
            <td>
                {
                    <Bookmark
                        bookmark={user.bookmark}
                        onToggleBookMark={onToggleBookMark}
                        id={user._id}
                    />
                }
            </td>
            <td>
                <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-danger"
                >
                    delete
                </button>
            </td>
        </tr>
    );
};



export default User;
