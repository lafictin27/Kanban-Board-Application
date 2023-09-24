import React from 'react'
import Deck from '../components/Deck'
import Userprofile from '../components/Userprofile';
import './home.css'
import { Priority, status } from '../constants/data.js'
import { useState, useEffect } from 'react'

const Home = ({ group, order }) => {
  const [record, setrecord] = useState(null);

  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then(response => response.json())
      .then(data => setrecord(data))
      .catch(err => console.log(err))
  }, []);

  return (
    <div className='home-screen'>
      {group === "Status" && status.map((item, id) => (
        <Deck key={id} symbol={<item.Symbol />} decktitle={item.title} data={record} group={group} order={order} />
      ))}
      {group === "Priority" && Priority.map((item, id) => (
        <Deck key={id} symbol={<item.Symbol />} decktitle={item.title} data={record} group={group} order={order} />
      ))}
      {group === "User" && record.users.map((item, id) => (
        <Deck key={id} symbol={<Userprofile firstletter={item.name[0]} available={item.available} />} decktitle={item.name} uid={item.id} data={record} group={group} order={order} />
      ))}
    </div>
  )
}

export default Home