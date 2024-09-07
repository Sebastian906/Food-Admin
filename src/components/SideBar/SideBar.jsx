import React from 'react'
import './SideBar.css'
import { assets } from '../../assets/assets'

const SideBar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-options'>
                <div className='sidebar-option'>
                    <img src={assets.add_icon} alt="" />
                    <p>Agregar Items</p>
                </div>
                <div className='sidebar-option'>
                    <img src={assets.order_icon} alt="" />
                    <p>Listar Items</p>
                </div>
                <div className='sidebar-option'>
                    <img src={assets.order_icon} alt="" />
                    <p>Ordenes</p>
                </div>
            </div>
        </div>
    )
}

export default SideBar