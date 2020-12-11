import React, { Component, useState } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Contactus from './Contact us';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Sidebar } from './Sidebar';

import './Navbar.css';

class NavBar extends Component {
    state = {

        clicked: false,
        sidebar: false
    }


    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    showSidebar = () => {
        this.setState({ sidebar: !this.state.sidebar })
    }
    render() {
        return (
            <div>
                <header>
                    <nav className='Navbar'>
                    {/* <div className='text'><h2>Client</h2></div> */}
                        <div onClick={this.handleClick}>
                            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} />
                        </div>
                        

                        <Link to="#" className='menu-bars'>
                            <FaIcons.FaBars onClick={this.showSidebar} />
                        </Link>

                        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                            <li>
                                <NavLink to='/cart'>Cart</NavLink>
                            </li>
                            <li>
                                <NavLink to='/product'>Product</NavLink>
                            </li>
                            <li>
                                <NavLink to='/home'>Sign In</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="new-nav">
                        <nav className={this.state.sidebar ? 'nav-menu-1 active' : 'nav-menu-1'}>
                            <ul className='nav-menu-items-1' onClick={this.showSidebar}>
                                <li className="navbar-toogle-1">
                                    <Link to="#" className='menu-bars-1'>
                                        <AiIcons.AiOutlineClose />
                                    </Link>
                                </li>
                                {Sidebar.map((item, index) => {
                                    return (
                                        <li key={index} className={item.className}>
                                            <Link to={item.path}>
                                                {item.icon}
                                                <span>{item.title}</span>
                                            </Link>
                                        </li>
                                    )
                                }
                                )}
                            </ul>
                        </nav>
                    </div>

                </header>
                <Switch>
                    <Route path='/home' exact component={Home} />
                    <Route path='/Contact us' component={Contactus} />
                    {/* <Route path='/Help Support' component={Helpsupport} /> */}

                </Switch>

                <div className='footer'>
                    <p>All rights Reserved</p>
                </div>
            </div>

        );
    }
}

export default NavBar;