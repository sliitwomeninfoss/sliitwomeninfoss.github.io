// import image from '../../assets/img/other/intro-img.svg'
import gif from '../../assets/img/logos/Innovation.gif'
import Mascot from './Mascot'
// import Blogs from './Blogs'
import PastEvents from './PastEvents'
// import Team from '../BoardMembers'
import Hackathon from './Hackathon'
import WeAre from './WeAre'
import logo from '../../assets/img/logos/WIF-GoogleForm-Header.png'
export default function Home() {

    return (
        <div>
            <header id="header" class="fixed-top">
                <nav
                    class="navbar navbar-expand-lg navbar-light bg-white sticky"
                    data-offset="500">
                    <div class="container">
                        <a href="/" class="navbar-brand">
                            {/* SLIIT<span class="text-primary">WIF</span> */}
                            <img src={logo} alt="logo" height="80" width="130" class="img-fluid just" />
                        </a>
                        {/* <img src={logo} alt="logo" height="50" width="100" class="img-fluid just" /> */}
                        <button
                            class="navbar-toggler"
                            data-toggle="collapse"
                            data-target="#navbarContent"
                            aria-controls="navbarContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div
                            class="navbar-collapse collapse"
                            id="navbarContent">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="/">
                                        HOME
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/about-us">
                                        ABOUT
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/past-events">
                                        EVENTS
                                    </a>
                                </li>
                                {/* <li class="nav-item">
                                    <a class="nav-link" href="!#">
                                       BLOG
                                    </a>
                                </li> */}
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
                        data-aos-delay="200">
                        <img src={gif} alt="" class="img-fluid" style={{width: 400, height: 400}}/>
                        
                    </div>
                    <div
                        class="intro-info"
                        data-aos="zoom-in"
                        data-aos-delay="100">
                        {/* <h2>
                            SLIIT
                            <br />
                            <span>Women In FOSS</span>
                            <br />
                            Community!
                        </h2> */}
                        <h2>SLIIT Women In FOSS Community</h2>
                        A group of volunteers who believe in the 
                        usage of Free/Open Source Software (FOSS). 
                        The primary objective of the community is
                         to promote, develop and diversify the
                          usage of Free and Open Source Software
                           at SLIIT.
                        <div>
                            {/* <a
                                href="!#"
                                class="btn-get-started scrollto">
                                Become a Member
                            </a> */}
                            <a href="/past-events"><button class="main-btn" type="submit">Become A Member</button></a>
                        </div>
                    </div>
                </div>
            </section>
            <main id="main">
                {/* <AboutUs /> */}
                <WeAre />
                <Mascot />
                <Hackathon />
                <PastEvents />
                {/* <Blogs /> */}
                {/* <Team /> */}
                {/* <ContactUs /> */}
            </main>
        </div>
    )
}