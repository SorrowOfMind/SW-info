import React from 'react';

const Navbar = ({setContent}) => {

    const handleContentChange = e => setContent(e.target.id);

    return (
        <nav className="navbar container">
            <button id="heroes" onClick={handleContentChange} className="content-btn">Heroes & Villians</button>
            <button id="worlds" onClick={handleContentChange} className="content-btn">Worlds</button>
        </nav>
    )
}

export default Navbar;
