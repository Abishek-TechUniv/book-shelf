import React from 'react';
import Sidebar from '../Sidebar';
import Content from '../Content';

import './App.css';

const App = () => (
  <div className="App-container">
    <Sidebar className="App-sidebar" />
    <Content className="App-content" />
  </div>
);

export default App;
