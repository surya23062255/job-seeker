import React, { useState } from 'react';
import Home from './Pages/Home';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Home setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
  );
}

export default App;
