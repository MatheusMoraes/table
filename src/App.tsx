import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  const [data,setData] = useState<any>();
  
  const getPath = async (name: any) => {
    const url = await import('./'+name);
  
    setData(url.client);
  }

  useEffect(() => {
    getPath('const.tsx');
  }, [])
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {data}

        <button>Clcicar</button>
      </header>
    </div>
  );
}

export default App;
