import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  // Initialize group and order from local storage or use default values
  const [group, setGroup] = useState(localStorage.getItem('group') || 'Status');
  const [order, setOrder] = useState(localStorage.getItem('order') || 'Title');

  // Update local storage whenever group or order changes
  useEffect(() => {
    localStorage.setItem('group', group);
    localStorage.setItem('order', order);
  }, [group, order]);

  return (
    <>
      <Header group={group} setgroup={setGroup} order={order} setorder={setOrder} />
      <Home group={group} order={order} />
    </>
  );
}

export default App;
