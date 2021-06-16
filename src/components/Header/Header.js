import React from 'react';
import "./Header.css"

const Logo = () => {
    return (
        <div className="App-logo">
            <img alt="Logo" className="logo" src="/images/merchub-shop6.png" />
        </div>
    );
};

const Header = () => {

    return (
        <div className="Header">
            <Logo />
            <form className="form">
                <input type="text" placeholder="Search products..." />
                <button type="submit" className="btn-search"><i className="fas fa-search"></i></button>
            </form>
            <a href="#categories">Categories<i className="fas fa-chevron-right"></i></a>
            <a href="#about">About Us<i className="fas fa-chevron-right"></i></a>
            <a href="#contact">Contact Us<i className="fas fa-chevron-right"></i></a>
        </div>
    );
};
export default Header;