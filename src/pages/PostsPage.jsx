import React from 'react';
import Users from "../components/users";
import {useParams} from "react-router-dom";
import PostPage from './PostPage';


const PostsPage = () => {
    const { userId } = useParams()

    return (
        <>
            {userId ? <PostPage/> : <Users/>}
        </>
    );
};

export default PostsPage;
