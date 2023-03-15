import { NavLink } from 'react-router-dom'

export default function NavBar() {
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
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'nav-link active'
                                                : 'nav-link'
                                        }
                                    >
                                        HOME
                                    </NavLink>
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
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
