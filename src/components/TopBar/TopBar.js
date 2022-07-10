import React from 'react';
import './TopBar.css'
import lolit from './lolit.jpg'
import { IoPersonSharp, IoCart, IoNotificationsSharp, IoSearch } from "react-icons/io5";


const TopBar = () => {
    return (
        <div className='topbar-container'>
            <div className="topbar-left">
                <span className="logo">Lolitmohan</span>
            </div>
            <div className="topbar-center">
                <div className="searchbar">
                    <IoSearch className='search-icon'/>
                    <input placeholder='Search for friend, post or video' type="text" className="searchInput" />
                </div>
            </div>
            <div className="topbar-right">
                <div className="topbar-links">
                    <span className="topbar-link">HomePage</span>
                    <span className="topbar-link">Timeline</span>
                </div>
                <div className="topbar-icons">
                    <div className="topbar-icons-item">
                        <IoPersonSharp className="person"/>
                        <span className="topbar-icon-badge">1</span>
                    </div>
                    <div className="topbar-icons-item">
                        <IoCart className="cart"/>
                        <span className="topbar-icon-badge">5</span>
                    </div>
                    <div className="topbar-icons-item">
                        <IoNotificationsSharp className="natification"/>
                        <span className="topbar-icon-badge">3</span>
                    </div>
                </div>
                <div className="profile">
                    <img src={lolit} alt="Lolit mohan" className="topbaner-img" />
                </div>
            </div>
        </div>
    );
};

export default TopBar;