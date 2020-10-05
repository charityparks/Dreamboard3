import React from 'react';
import { Link } from 'react-router-dom'


const Home = () => (
    <div>
        <h1>Welcome to the Home page!</h1>
        <span>
            <Link to="/MyBoards">My Boards</Link>
            <Link to="/NewBoardForm">New Board</Link>
        </span>
    </div>
);



export default Home;

//    Chaya's: <Link key={r.id} to={`/recipes/${r.id}`}>{r.attributes.name}</Link>


// <Route exact path="/" component={Home} />