import React, { useState, useEffect } from "react";
import api from "../../api";
import SearchStatus from "./searchStatus";
import User from "./user";
import Pagination from "./paginations";
import { paginate } from "../../utils/paginate";
import GroupList from "./groupList";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [professions, setProfessions] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 4;
    const itemsCount = users.length;

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data));
        api.users.fetchAll().then(data => setUsers(data));
    }, []);

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };

    const onToggleBookMark = (id) => {
        const userIndex = users.findIndex((user) => user._id === id);
        const newUsers = [...users];
        newUsers[userIndex].bookmark = !newUsers[userIndex].bookmark;
        console.log(!newUsers[userIndex].bookmark);
        console.log(newUsers);
        setUsers(newUsers);
    };

    const handlerPageChange = (id) => {
        setCurrentPage(id);
    };

    const handleProfessionSelect = (params) => {
        console.log(params);
    };

    const pageCrop = paginate(pageSize, currentPage, users);

    return (
        <>
            {professions && <GroupList 
                items={professions} 
                onItemSelect={handleProfessionSelect}
                valueProperty="_id"
                contentProperty="name"
            />}


            <SearchStatus users={users} />

            {users.length > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встретился, раз</th>
                            <th scope="col">Оценка</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {pageCrop.map((user) => (
                            <User
                                key={user._id}
                                user={user}
                                onToggleBookMark={onToggleBookMark}
                                handleDelete={handleDelete}
                            />
                        ))}
                    </tbody>
                </table>
            )}

            <Pagination
                currentPage={currentPage}
                itemsCount={itemsCount}
                pageSize={pageSize}
                onPageChange={handlerPageChange}
            />
        </>
    );
};

export default Users;
