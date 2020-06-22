import React, { useState } from 'react';
import Navbar from '../nav/Navbar';

import './App.css';

function App() {
  const [loading, setLoading] = useState(false);

  const handleLoading = () => setLoading(!loading);

  return (
    <div className="App">
      <Navbar isLoading={loading} />
      <button onClick={handleLoading}>Change navbar state</button>
    </div>
  );
}

export default App;
