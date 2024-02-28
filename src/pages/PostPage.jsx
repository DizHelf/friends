import {useState, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import api from "../api";

const PostPage = () => {
    const [user, setUser] = useState({})
    const {userId} = useParams()

    const getUser = async() => {
        await api.users.fetchUserById(userId).then((user) => {
            if (user !== undefined) {
                setUser(user)
            }
            return {}
        })
    };

    useEffect(() => {
        getUser()
    }, []);



    return (
        <>
            {user._id ? <h2>{user.name}</h2> : <h2>{`user id ${userId} not found`}</h2>}
            <Link to={"/posts"}>К постам</Link>
        </>
    );
};

export default PostPage;
