import React from 'react'
import './SideBar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-options'>
                <NavLink to='/add' className='sidebar-option'>
                    <img src={assets.add_icon} alt="" />
                    <p>Agregar Items</p>
                </NavLink>
                <NavLink to='/list' className='sidebar-option'>
                    <img src={assets.order_icon} alt="" />
                    <p>Listar Items</p>
                </NavLink>
                <NavLink to='/orders' className='sidebar-option'>
                    <img src={assets.order_icon} alt="" />
                    <p>Ordenes</p>
                </NavLink>
            </div>
        </div>
    )
}

export default SideBar