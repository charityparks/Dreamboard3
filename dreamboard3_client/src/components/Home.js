import React from 'react';
import { Link } from 'react-router-dom'



const Home = () => (
    <div>
        <span>
            <Link to={"/boards"}>My Boards</Link>
            <Link to={"/boards/new"}>New Board</Link>
        </span>
    </div>
);

export default Home;
