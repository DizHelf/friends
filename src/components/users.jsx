import React, { useState, useEffect } from "react";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
import api from "../api";
import _ from "lodash";
import GroupList from "./groupList";
import SearchStatus from "./searchStatus";
import UserTable from "./userTable";
import TextField from "./textField";

const Users = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfession] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const [sortOptions, setSortOptions] = useState({ iterates: "name", order: "asc" });
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("")
    const pageSize = 8;
    

    useEffect(() => {
        api.users.fetchAll().then((data) => { 
            setUsers(data);
        });
    }, []);

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };

    const handleToggleBookMark = (id) => {
        setUsers(
            users.map((user) => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark };
                }
                return user;
            })
        );
    };

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfession(data));
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf, search]);

    const handleProfessionSelect = (item) => {
        setSearch("")
        setSelectedProf(item);
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handleSort = (item) => {
        setSortOptions(item);
    };

    const handleChange = (e) => {
        setSelectedProf()
        setSearch(e.target.value)
    };

    const sortedUsers = () => {
        const filteredUsers = selectedProf
        ? users.filter(
              (user) =>
                  JSON.stringify(user.profession) ===
                  JSON.stringify(selectedProf)
          )
        : users;

        const sortUsers = _.orderBy(filteredUsers, sortOptions.iterates, sortOptions.order);
        return sortUsers.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))
    };

    
    const filteredUsers = sortedUsers()

    const count = filteredUsers.length;
    const usersCrop =  paginate(filteredUsers, currentPage, pageSize);

    
    const clearFilter = () => {
        setSelectedProf();
    };

    return (
        <div className="d-flex">
            {professions && (
                <div className="d-flex flex-column flex-shrink-0 p-3">
                    <GroupList
                        selectedItem={selectedProf}
                        items={professions}
                        onItemSelect={handleProfessionSelect}
                    />
                    <button
                        className="btn btn-secondary mt-2"
                        onClick={clearFilter}
                    >
                        Очистить
                    </button>
                </div>
            )}
            
            <div className="d-flex flex-column">
                <SearchStatus length={count} />
                <TextField
                    label={"поиск"}
                    type={"text"}
                    name={"search"}
                    value={search}
                    onChange={handleChange}
                />

                {count > 0 && (
                    <UserTable 
                        users={usersCrop} 
                        sortOptions={sortOptions} 
                        onSort={handleSort} 
                        onDelete={handleDelete}
                        onToggleBookMark={handleToggleBookMark}
                    />
                )}
                <div className="d-flex justify-content-center">
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default Users;
