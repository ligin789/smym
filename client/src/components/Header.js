import React from 'react'
import Logo from '../assets/img/logo.png'
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";

import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/remixicon/remixicon.css';
import '../assets/vendor/swiper/swiper-bundle.min.css';
import '../assets/vendor/glightbox/css/glightbox.min.css';
import '../assets/css/style.css';

function Header() {
    return (
        <div>
              <Helmet>
                <script src="../assets/js/main.js"></script>
            </Helmet>
            {/* ======= Header ======= */}
            <header id="header" className="header fixed-top">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <Link to="/" className="logo d-flex align-items-center">
                        <img src={Logo} alt="" />
                        <span>FlexStart</span>
                    </Link>
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><Link className="nav-link scrollto active" to="#hero">Home</Link></li>
                            <li><Link className="nav-link scrollto" to="#about">About</Link></li>
                            <li><Link className="nav-link scrollto" to="#services">Services</Link></li>
                            <li><Link className="nav-link scrollto" to="#portfolio">Portfolio</Link></li>
                            <li><Link className="nav-link scrollto" to="#team">Team</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li className="dropdown"><Link to="#"><span>Drop Down</span> <i className="bi bi-chevron-down" /></Link>
                                <ul>
                                    <li><Link to="#">Drop Down 1</Link></li>
                                    <li className="dropdown"><Link to="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right" /></Link>
                                        <ul>
                                            <li><Link to="#">Deep Drop Down 1</Link></li>
                                            <li><Link to="#">Deep Drop Down 2</Link></li>
                                            <li><Link to="#">Deep Drop Down 3</Link></li>
                                            <li><Link to="#">Deep Drop Down 4</Link></li>
                                            <li><Link to="#">Deep Drop Down 5</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="#">Drop Down 2</Link></li>
                                    <li><Link to="#">Drop Down 3</Link></li>
                                    <li><Link to="#">Drop Down 4</Link></li>
                                </ul>
                            </li>
                            <li><Link className="nav-link scrollto" to="#contact">Contact</Link></li>
                            <li><Link className="getstarted scrollto " to="/login">Login</Link></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>{/* .navbar */}
                </div>
            </header>{/* End Header */}
        </div>
    )
}

export default Header
