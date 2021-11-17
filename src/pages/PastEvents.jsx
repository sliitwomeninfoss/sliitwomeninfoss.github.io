import angelica from '../assets/img/events/A Chat With Angelicaa.jpg'
import girls from '../assets/img/events/A Girl’s Pathway To Become An IT Professional.jpg'
import sea from '../assets/img/events/A Smooth sea never .jpg'
import aws from '../assets/img/events/AWS.jpg'
import talk from '../assets/img/events/Lets Talk EQ.jpg'
import hack from '../assets/img/events/her_Hello World__ Registration Open.jpg'

export default function PastEvents() {
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
                                <li class="nav-item">
                                    <a class="nav-link" href="/">
                                        HOME
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/about-us">
                                        ABOUT
                                    </a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link" href="/past-events">
                                        EVENTS
                                    </a>
                                </li>
                                {/* <li class="nav-item">
                                    <a class="nav-link" href="!#">
                                        Blog
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

            <section id="past-events">
                <div class="container" data-aos="zoom-in">
                    <header class="section-header">
                        <h3>Upcoming Events</h3>
                        <p>
                            No events at this moment. Follow us to get updates.
                        </p>
                    </header>
                    <header class="section-header">
                        <h4>Past Events</h4>
                        {/* <p>
                            Laudem latine persequeris id sed, ex fabulas
                            delectus quo. No vel partiendo abhorreant
                            vituperatoribus.
                        </p> */}
                    </header>

                    <div class="row mt-5">
                        <div class="col-lg-4 py-3" data-aos="zoom-out-down">
                            <div class="card-events">
                                <div class="header">
                                    <div class="post-thumb">
                                        <img src={angelica} alt="" />
                                    </div>
                                </div>
                                <div class="body">
                                    <h5 class="post-title">
                                        <a href="!#">A Chat with Angelica</a>
                                    </h5>
                                    <div class="post-date">
                                        Posted on <a href="!#">27 Jan 2020</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 py-3" data-aos="zoom-out-down">
                            <div class="card-events">
                                <div class="header">
                                    <div class="post-thumb">
                                        <img src={girls} alt="" />
                                    </div>
                                </div>
                                <div class="body">
                                    <h5 class="post-title">
                                        <a href="!#">
                                            A Girl’s Pathway To Become An IT
                                            Professional
                                        </a>
                                    </h5>
                                    <div class="post-date">
                                        Posted on <a href="!#">27 Jan 2020</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 py-3" data-aos="zoom-out-down">
                            <div class="card-events">
                                <div class="header">
                                    <div class="post-thumb">
                                        <img src={sea} alt="" />
                                    </div>
                                </div>
                                <div class="body">
                                    <h5 class="post-title">
                                        <a href="!#">A Smooth sea never</a>
                                    </h5>
                                    <div class="post-date">
                                        Posted on <a href="!#">27 Jan 2020</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 py-3" data-aos="zoom-out-down">
                            <div class="card-events">
                                <div class="header">
                                    <div class="post-thumb">
                                        <img src={aws} alt="" />
                                    </div>
                                </div>
                                <div class="body">
                                    <h5 class="post-title">
                                        <a href="!#">AWS</a>
                                    </h5>
                                    <div class="post-date">
                                        Posted on <a href="!#">27 Jan 2020</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 py-3" data-aos="zoom-out-down">
                            <div class="card-events">
                                <div class="header">
                                    <div class="post-thumb">
                                        <img src={talk} alt="" />
                                    </div>
                                </div>
                                <div class="body">
                                    <h5 class="post-title">
                                        <a href="!#">Lets Talk EQ</a>
                                    </h5>
                                    <div class="post-date">
                                        Posted on <a href="!#">27 Jan 2020</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 py-3" data-aos="zoom-out-down">
                            <div class="card-events">
                                <div class="header">
                                    <div class="post-thumb">
                                        <img src={hack} alt="" />
                                    </div>
                                </div>
                                <div class="body">
                                    <h5 class="post-title">
                                        <a href="!#">
                                            her Hello World Registration Open
                                        </a>
                                    </h5>
                                    <div class="post-date">
                                        Posted on <a href="!#">27 Jan 2020</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 mt-4 text-center">
                            <a href="/past-events">
                                <button class="main-btn" type="submit">
                                    View More
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
