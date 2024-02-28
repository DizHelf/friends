import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='d-flex gap-5 p-4'>
            <Link to={"/"}>Main</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/posts"}>Posts</Link>
        </header>
    );
};

export default Header;
