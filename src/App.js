import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';

import {API} from 'aws-amplify'

function App() {
  const [greeting, setGreeting] = useState(null)
  async function fetchGreeting() {
    const apiData = await API.get('mypythonapi', '/greeting')
    setGreeting(apiData.message)
  }

  useEffect(() => {
    fetchGreeting()
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{greeting}</h1>
      </header>
    </div>
  );
}

export default App;
