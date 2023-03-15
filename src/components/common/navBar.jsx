import { Link } from 'react-router-dom'
import logo from '../../assets/img/logos/WIF-Dark.png'

export default function NavBar() {
    return (
        <div>
            <header id="header" class="fixed-top">
                <nav
                    class="navbar navbar-expand-lg navbar-light bg-white sticky"
                    data-offset="500"
                >
                    <div class="container">
                        {/* <a href="/" class="navbar-brand"> */}
                        {/* SLIIT<span class="text-primary">WIF</span> */}
                        {/* <img src={logo} alt="logo" height="80" width="130" class="img-fluid just" /> */}
                        <div class="logo float-left">
                            <a href="/">
                                <img src={logo} alt="" class="img-fluid" />
                            </a>
                        </div>
                        {/* </a> */}
                        {/* <img src={logo} alt="logo" height="50" width="100" class="img-fluid just" /> */}
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
                                    {/* <a class="nav-link" href="/">
                                        HOME
                                    </a> */}
                                    <Link to="/" class="nav-link">
                                        HOME
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    {/* <a class="nav-link" href="/about-us">
                                        ABOUT
                                    </a> */}
                                    <Link to="/about-us" class="nav-link">
                                        ABOUT
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    {/* <a class="nav-link" href="/past-events">
                                        EVENTS
                                    </a> */}
                                    <Link to="/past-events" class="nav-link">
                                        EVENTS
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    {/* <a class="nav-link" href="/blogs">
                                        BLOGS
                                    </a> */}
                                    <Link to="/blogs" class="nav-link">
                                        BLOGS
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    {/* <a class="nav-link" href="/board-members">
                                        BOARD
                                    </a> */}
                                    <Link to="/board-members" class="nav-link">
                                        BOARD
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    {/* <a class="nav-link" href="/code-of-conduct">
                                        CODE OF CONDUCT
                                    </a> */}
                                    <Link
                                        to="/code-of-conduct"
                                        class="nav-link"
                                    >
                                        CODE OF CONDUCT
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    {/* <a class="nav-link" href="/contact-us">
                                        CONTACT
                                    </a> */}
                                    <Link to="/contact-us" class="nav-link">
                                        CONTACT
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
