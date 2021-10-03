import React, { Component } from 'react'
import logo from '../../assets/img/logo/lo.PNG'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <header id="header" class="fixed-top">
                    <nav
                        class="navbar navbar-expand-lg navbar-light bg-white sticky"
                        data-offset="500"
                    >
                        <div class="container">
                            <a href="/" class="navbar-brand">
                                SLIIT<span class="text-primary">WIF</span>
                            </a>

                            <button
                                class="navbar-toggler"
                                data-toggle="collapse"
                                data-target="#navbarContent"
                                aria-controls="navbarContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div
                                class="navbar-collapse collapse"
                                id="navbarContent"
                            >
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item active">
                                        <a class="nav-link" href="/">
                                            Home
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/about-us">
                                            About
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="service.html">
                                            Past Events
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="blog.html">
                                            Blog
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="blog.html">
                                            Board
                                        </a>
                                    </li>
                                    {/* <li class="nav-item">
                                        <a class="btn btn-primary ml-lg-2" href="#">Board</a>
                                    </li> */}
                                    <li class="nav-item">
                                        <a
                                            class="nav-link"
                                            href="/code-of-conduct"
                                        >
                                            Code of Conduct
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="">
                                            Contact Us
                                        </a>
                                    </li>
                                    {/* <li class="nav-item">
                                        <a class="btn btn-primary ml-lg-2" href="#">Contact Us</a>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}
