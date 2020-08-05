import React from 'react';

const Navbar = ({setContent}) => {

    const handleContentChange = e => setContent(e.target.id);

    return (
        <nav className="navbar">
            <button id="heroes" onClick={handleContentChange}>Heroes & Villians</button>
            <button id="worlds" onClick={handleContentChange}>Worlds</button>
        </nav>
    )
}

export default Navbar;
