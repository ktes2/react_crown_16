import React from 'react';
import './MenuItem_16.scss';

const MenuItem__16 = ({ name, remotelUrl, size }) => {
    return (
        <div className={`${size} menu-item`}>
            <img className="background-image" src={remotelUrl} alt="" />
            <a href="./hats.html" className="content">
                <h1 className="title">{name}</h1>
                <span className="subtitle">SHOP NOW</span>
            </a>
        </div>
    );
};

export default MenuItem__16;