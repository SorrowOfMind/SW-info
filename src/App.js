import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Heroes from './components/Heroes';
import Worlds from './components/Worlds';

function App() {
  const [content, stContent] = useState('heroes');
  return (
    <div className="App">
      <h1>Your Star Wars Hub</h1>
      <Navbar />
      <div className="content">
        {content === 'heroes' && <Heroes />}
        {content === 'worlds' && <Worlds />}
      </div>
    </div>
  );
}

export default App;
