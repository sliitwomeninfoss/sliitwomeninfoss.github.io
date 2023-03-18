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
                                    {/* <Link
                                        exact
                                        to="/"
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'nav-link active'
                                                : 'nav-link'
                                        }
                                    >
                                        HOME
                                    </Link> */}
                                    <Link
                                        to="https://wif.sliitfoss.org/"
                                        class="nav-link active"
                                    >
                                        HOME
                                    </Link>
                                </li>
                                <li>
                                    {/* <Link
                                        to="/about-us"
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'nav-link active'
                                                : 'nav-link'
                                        }
                                    >
                                        ABOUT US
                                    </Link> */}

                                    <Link to="/about-us" class="nav-link">
                                        ABOUT US
                                    </Link>
                                </li>

                                <li>
                                    {/* <Link
                                        to="/past-events"
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'nav-link active'
                                                : 'nav-link'
                                        }
                                    >
                                        EVENTS
                                    </Link> */}
                                    <Link to="/past-events" class="nav-link">
                                        EVENTS
                                    </Link>
                                </li>

                                <li>
                                    {/* <Link
                                        to="/blogs"
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'nav-link active'
                                                : 'nav-link'
                                        }
                                    >
                                        BLOG
                                    </Link> */}
                                    <Link to="/blogs" class="nav-link">
                                        BLOG
                                    </Link>
                                </li>
                                <li>
                                    {/* <Link
                                        to="/board-members"
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'nav-link active'
                                                : 'nav-link'
                                        }
                                    >
                                        BOARD
                                    </Link> */}
                                    <Link to="/board-members" class="nav-link">
                                        BOARD
                                    </Link>
                                </li>
                                <li>
                                    {/* <Link
                                        to="/code-of-conduct"
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'nav-link active'
                                                : 'nav-link'
                                        }
                                    >
                                        CODE OF CONDUCT
                                    </Link> */}
                                    <Link
                                        to="/code-of-conduct"
                                        class="nav-link"
                                    >
                                        CODE OF CONDUCT
                                    </Link>
                                </li>
                                <li>
                                    {/* <Link
                                        to="/contact-us"
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'nav-link active'
                                                : 'nav-link'
                                        }
                                    >
                                        CONTACT US
                                    </Link> */}
                                    <Link to="/contact-us" class="nav-link">
                                        CONTACT US
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
