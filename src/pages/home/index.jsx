import gif from '../../assets/img/logos/Innovation.gif'
import Mascot from './Mascot'
import Blogs from './Blogs'
import PastEvents from './PastEvents'
import Hackathon from './Hackathon'
import WeAre from './WeAre'
import Webinars from './Webinars'
import logo from '../../assets/img/logos/WIF-Dark.png'
import { Link } from 'react-router-dom'
export default function Home() {
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
                                    <a class="nav-link" href="/">
                                        HOME
                                    </a>
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
                                    <a class="nav-link" href="/past-events">
                                        EVENTS
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/blogs">
                                        BLOGS
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/board-members">
                                        BOARD
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/code-of-conduct">
                                        CODE OF CONDUCT
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/contact-us">
                                        CONTACT
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <section id="intro" class="clearfix">
                <div class="container" data-aos="fade-up">
                    <div
                        class="intro-img"
                        data-aos="zoom-out"
                        data-aos-delay="200"
                    >
                        <img src={gif} alt="" class="img-fluid" />
                    </div>
                    <div
                        class="intro-info px-4"
                        data-aos="zoom-in"
                        data-aos-delay="100"
                    >
                        {/* <h2>
                            SLIIT
                            <br />
                            <span>Women In FOSS</span>
                            <br />
                            Community!
                        </h2> */}
                        <h2>SLIIT Women In FOSS Community</h2>
                        <p>
                            We are a group of enthusiastic volunteers who
                            believe in the usage and contribution of Free Open
                            Source Software (FOSS). Our community's primary
                            objective is to promote, inspire and diversify the
                            usage of Free Open Source Software at SLIIT amongst
                            empowered women.
                        </p>
                        <div>
                            {/* <a
                                href="!#"
                                class="btn-get-started scrollto">
                                Become a Member
                            </a> */}
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSfNYep3jMJa3lO54Tvwzon-2jpxe4C7Fo4kKpWyDT7PV17_xQ/viewform?usp=sf_link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button class="main-btn" type="submit">
                                    Become A Member
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <main id="main">
                <WeAre />
                <Mascot />
                <Hackathon />
                <PastEvents />
                <Webinars />
                <Blogs />
            </main>
        </div>
    )
}
