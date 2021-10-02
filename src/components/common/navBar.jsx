import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <header id="header" class="fixed-top">
                    <div class="container">
                        <div class="logo float-left">
                            <h1>
                                <a href="">NewBiz</a>
                            </h1>
                            {/* <a href="index.html"> */}
                            <img
                                src="../../assets/img/logo.png"
                                alt=""
                                class="img-fluid"
                            />
                            {/* </a> */}
                        </div>
                        <nav class="main-nav float-right d-none d-lg-block">
                            <ul>
                                <li class="active">
                                    <a href="">Home</a>
                                </li>
                                <li>
                                    <a href="#about">About Us</a>
                                </li>
                                <li>
                                    <a href="#services">Services</a>
                                </li>
                                <li>
                                    <a href="#portfolio">Portfolio</a>
                                </li>
                                <li>
                                    <a href="#team">Team</a>
                                </li>
                                <li class="drop-down">
                                    <a href="">Drop Down</a>
                                    <ul>
                                        <li>
                                            <a href="#">Drop Down 1</a>
                                        </li>
                                        <li class="drop-down">
                                            <a href="#">Drop Down 2</a>
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        Deep Drop Down 1
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Deep Drop Down 2
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Deep Drop Down 3
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Deep Drop Down 4
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Deep Drop Down 5
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Drop Down 3</a>
                                        </li>
                                        <li>
                                            <a href="#">Drop Down 4</a>
                                        </li>
                                        <li>
                                            <a href="#">Drop Down 5</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#contact">Contact Us</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
        )
    }
}
