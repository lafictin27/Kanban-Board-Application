import React from 'react'
import './style/header.css'
import { useState } from 'react';
import Menu from './Menu';

const Header = ({ group, setgroup, order, setorder }) => {

  const [menu, setMenu] = useState(false);

  return (
    <div className='header-nav'>
      <div className='header-menu' onClick={() => {
        setMenu(!menu);
      }}>
        <div className='header-menu-icon'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
          </svg>

        </div>
        <div className='header-menu-displayname'>
          <p>Display</p>
        </div>
        <div className='header-menu-icon'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>

        </div>
      </div>
      {menu && <Menu setMenu={setMenu} group={group} setgroup={setgroup} order={order} setorder={setorder} />}
    </div>
  )
}

export default Header