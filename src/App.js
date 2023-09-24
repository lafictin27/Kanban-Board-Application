import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';

function App() {

  const [group, setgroup] = useState("Status");
  const [order, setorder] = useState("Title");

  return (
    <>
      <Header group={group} setgroup={setgroup} order={order} setorder={setorder} />
      <Home group={group} order={order} />
    </>
  );
}

export default App;
