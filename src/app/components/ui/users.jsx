import React, { useState } from "react";
import api from "../../api"
import SearchStatus from "./searchStatus";
import User from './user';
import Pagination from "./paginations";
import { paginate } from "../../utils/paginate";

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 4
    const itemsCount = users.length

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };

    const handleBookmark = (id) => {
        const userId = users.findIndex((user) => user._id === id)
        const newUsers = [...users]
        newUsers[userId].bookmark = !newUsers[userId].bookmark
        setUsers(newUsers)
    }

    const handlerPageChange = (id) => {
      setCurrentPage(id)
    }

    
    
    const pageCrop = paginate(pageSize, currentPage, users)

    return (
        <>
            <SearchStatus users={users}/>

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
                        {pageCrop.map((user) =><User key={user._id} user={user} handleBookmark={handleBookmark} handleDelete={handleDelete}/> )}
                    </tbody>
                </table>
            )}

            <Pagination currentPage={currentPage} itemsCount={itemsCount} pageSize={pageSize} onPageChange={handlerPageChange}/>
        </>
    );
};


export default Users;
