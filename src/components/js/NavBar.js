import React from 'react';
import './css/NavBar.css';
import { gsap } from 'gsap';

const NavBar = (props) => {
    const activatePopUp = props.activatePopUp;
    const removeAllTask = props.removeAllTask;
    // animation for menu element
    return (
        < nav className='navbar' >
            <ul>
                <li className='menuElement1' onClick={() => activatePopUp('add')} >Add new task</li>
                <li className='menuElement2' onClick={() => activatePopUp('active')} >Show active tasks</li>
                <li className='menuElement3'>Show a scheme</li>
                <li className='menuElement4' onClick={removeAllTask}>Remove all</li>
            </ul>

        </nav >
    );
}

export default NavBar;