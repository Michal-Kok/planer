import React from 'react';
import './NavBar.css';

const NavBar = (props) => {
    const showPopUp = props.showPopUp;

    return (
        < nav className='navbar' >
            <ul>
                <li onClick={() => showPopUp('add')} >Add new task</li>
                <li onClick={() => showPopUp('completed')} >Show completed tasks</li>
                <li onClick={() => showPopUp('failed')} >Show failed Tasks</li>
                <li>Remove all</li>
            </ul>
        </nav >
    );
}

export default NavBar;