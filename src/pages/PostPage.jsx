import {useState, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import api from "../api";

const PostPage = () => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)
    const {userId} = useParams()

    const getUser = async() => {
        setLoading(true)
        await api.users.fetchUserById(userId).then((user) => {
            if (user !== undefined) {
                setUser(user)
            }
            return {}
        })
        setLoading(false)
    };

    const renderInfo = () => {
        if (user._id !== undefined) {
            return <h2>{user.name}</h2>
        }
        return <h2>{`user id ${userId} not found`}</h2>
    }

    useEffect(() => {
        getUser()
    }, []);



    return (
        <>
            {loading ? "Loading" : renderInfo()}
        </>
    );
};

export default PostPage;
