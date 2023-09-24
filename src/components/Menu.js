import React from 'react'
import './style/menu.css'

const Menu = ({ setMenu, group, setgroup, order, setorder }) => {
    const handlegroupoption = (e) => {
        setgroup(e.target.value);
    }
    const handleorderoption = (e) => {
        setorder(e.target.value);
    }

    return (
        <>
            <div className='out-of-menu' onClick={() => {
                setMenu(false);
            }}>
            </div>
            <div className='menu'>
                <div className='menu-options'>
                    <p>Grouping</p>
                    <select defaultValue={group} onChange={handlegroupoption}>
                        <option value="Status">Status</option>
                        <option value="User">User</option>
                        <option value="Priority">Priority</option>
                    </select>
                </div>
                <div className='menu-options'>
                    <p>Ordering</p>
                    <select defaultValue={order} onChange={handleorderoption}>
                        <option value="Title">Title</option>
                        <option value="Priority">Priority</option>
                    </select>
                </div>
            </div></>
    )
}

export default Menu