import React from 'react'
import './style/card.css'
import Userprofile from './Userprofile'
import { Priority, status } from '../constants/data.js'

const Card = ({ camid, sub, cat, group, usr, userdata, ticketdata }) => {
  const firstname = group !== "User" ? userdata.find(user => user.id === usr) : undefined;
  const pid = group !== "Priority" ? ticketdata.find(ticket => ticket.id === camid) : undefined;
  const Plogo = pid && Priority[pid.priority].Symbol;

  const sid = group !== "Status" ? ticketdata.find(ticket => ticket.id === camid) : undefined;
  const sid_num = sid && status.find(item => item.title === sid.status);
  const Slogo = sid_num && sid_num.Symbol;
  return (
    <div className='card-temp'>
      <div className='card-temp-info'>
        <div className='card-temp-info-id'>
          {camid}
        </div>
        {group !== "User" && <div className='card-temp-info-userpic'>
          <Userprofile firstletter={firstname.name} available={firstname.available} />
        </div>}
      </div>
      <div className='card-temp-subject'>
        {group !== "Status" && <div className='card-temp-subject-status'>
          <Slogo />
        </div>}
        <div>
          {sub}
        </div>
      </div>
      <div className='card-temp-category'>
        {group !== "Priority" && < div className='card-temp-category-logo'>
          <Plogo />
        </div>}
        {cat.map((item, id) => (
          <div className='card-temp-category-name' key={id}>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card