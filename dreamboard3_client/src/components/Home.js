import React from 'react';
import { Link } from 'react-router-dom'


const Home = () => (
    <div>
        <span>
            <Link to='/boards'>My Boards</Link>
            <Link to='/boards/new'>New Board</Link>
        </span>
    </div>
);

export default Home;

// //    Chaya's: <Link key={r.id} to={`/recipes/${r.id}`}>{r.attributes.name}</Link>  

// // <Route exact path='/' component={Home}/>
// {/* <Route exact path='/boards' component={MyBoards}/>
// <Route exact path='/boards/new' component={NewBoardForm}/> */}
