import React from 'react';
import './Header.css';
import {Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import ShopingBasketIcon from "@material-ui/icons/ShoppingBasket";
function Header() {
    return (
        <nav className="header">


            <Link to="/">

                <img className="header_logo"
                 src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
                 alr=""
                />
          </Link>
          <div className="header_search">
          <input type="text" className="header_searchInput"/>
            <SearchIcon className="header_searchIcon"/>
            </div>

        <div className="header_nav">

        <Link to="/login" className="header_link">
            <div className="header_option">
            <span className="header_optionone">hello</span>
            <span className="header_optiontwo">sign In</span>
            </div>
        </Link>

        <Link to="/" className="header_link">
            <div className="header_option">
            <span className="header_optionone">Returns</span>
            <span className="header_optiontwo">Orders</span>
            </div>
        </Link>

        <Link to="/" className="header_link">
            <div className="header_option">
            <span className="header_optionone">your</span>
            <span className="header_optiontwo">prime</span>
            </div>
        </Link>

        <Link to="/checkout" className="header_link">
            <div className="header_optionBasket">
            <ShopingBasketIcon/>
            <span className="header_optiontwo header_basketcount">0</span>
            </div>
        </Link>




        </div>



        </nav>
    )
}

export default Header
