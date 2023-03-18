import { NavLink } from 'react-router-dom'
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
                        <div class="logo float-left">
                            <a href="/">
                                <img src={logo} alt="" class="img-fluid" />
                            </a>
                        </div>

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
                                <li>
                                    <NavLink
                                        exact
                                        to="/"
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'nav-link active'
                                                : 'nav-link'
                                        }
                                    >
                                        HOME
                                    </NavLink>
                                    {/* <Link
                                        to="https://wif.sliitfoss.org/"
                                        class="nav-link active"
                                    >
                                        HOME
                                    </Link> */}
                                </li>
                                <li>
                                    <NavLink
                                        to="/about-us"
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'nav-link active'
                                                : 'nav-link'
                                        }
                                    >
                                        ABOUT US
                                    </NavLink>

                                    {/* <Link to="/about-us" class="nav-link">
                                        ABOUT US
                                    </Link> */}
                                </li>

                                <li>
                                    <NavLink
                                        to="/past-events"
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'nav-link active'
                                                : 'nav-link'
                                        }
                                    >
                                        EVENTS
                                    </NavLink>
                                    {/* <Link to="/past-events" class="nav-link">
                                        EVENTS
                                    </Link> */}
                                </li>

                                <li>
                                    <NavLink
                                        to="/blogs"
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'nav-link active'
                                                : 'nav-link'
                                        }
                                    >
                                        BLOG
                                    </NavLink>
                                    {/* <Link to="/blogs" class="nav-link">
                                        BLOG
                                    </Link> */}
                                </li>
                                <li>
                                    <NavLink
                                        to="/board-members"
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'nav-link active'
                                                : 'nav-link'
                                        }
                                    >
                                        BOARD
                                    </NavLink>
                                    {/* <Link to="/board-members" class="nav-link">
                                        BOARD
                                    </Link> */}
                                </li>
                                <li>
                                    <NavLink
                                        to="/code-of-conduct"
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'nav-link active'
                                                : 'nav-link'
                                        }
                                    >
                                        CODE OF CONDUCT
                                    </NavLink>
                                    {/* <Link
                                        to="/code-of-conduct"
                                        class="nav-link"
                                    >
                                        CODE OF CONDUCT
                                    </Link> */}
                                </li>
                                <li>
                                    <NavLink
                                        to="/contact-us"
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'nav-link active'
                                                : 'nav-link'
                                        }
                                    >
                                        CONTACT US
                                    </NavLink>
                                    {/* <Link to="/contact-us" class="nav-link">
                                        CONTACT US
                                    </Link> */}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
