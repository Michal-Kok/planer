import React from 'react';
import './css/NavBar.css';

const NavBar = (props) => {
    const activatePopUp = props.activatePopUp;

    return (
        < nav className='navbar' >
            <ul>
                <li onClick={() => activatePopUp('add')} >Add new task</li>
                <li onClick={() => activatePopUp('active')} >Show active tasks</li>
                <li>Show a scheme</li>
                <li>Remove all</li>
            </ul>
        </nav >
    );
}

export default NavBar;