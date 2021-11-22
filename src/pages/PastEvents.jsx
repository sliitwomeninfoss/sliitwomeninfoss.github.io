import angelica from '../assets/img/events/A Chat With Angelicaa.jpg'
import girls from '../assets/img/events/A Girl’s Pathway To Become An IT Professional.jpg'
// import sea from '../assets/img/events/A Smooth sea never .jpg'
// import aws from '../assets/img/events/AWS.jpg'
// import talk from '../assets/img/events/Lets Talk EQ.jpg'
// import hack from '../assets/img/events/her_Hello World__ Registration Open.jpg'

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
                                    <a class="nav-link" href="/blogs">
                                        BLOGS
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
                        {/* <p>
                            No events at this moment. Follow us to get updates.
                        </p> */}
                    </header>
                    <header class="section-header">
                        <h4 style={{ paddingTop: 50 }}>Past Events</h4>
                        {/* <p>
                            Laudem latine persequeris id sed, ex fabulas
                            delectus quo. No vel partiendo abhorreant
                            vituperatoribus.
                        </p> */}
                    </header>

                    <div id="cards_landscape_wrap-2">
                        <div class="container">
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3" data-aos="zoom-out-down">
                                    <a href="!#">
                                        <div class="card-flyer">
                                            <div class="text-box">
                                                <div class="image-box">
                                                    <img src={angelica} alt="" />
                                                </div>
                                                <div class="text-container">
                                                    <h6>Title 01</h6>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                    <h5> <i class="fa fa-calendar"></i>{' '}24th March 2021</h5>
                                                    <h5> <i class="fa fa-map-marker"></i>{' '}SLIIT</h5> </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3" data-aos="zoom-out-down">
                                    <a href="!#">
                                        <div class="card-flyer">
                                            <div class="text-box">
                                                <div class="image-box">
                                                    <img src={girls} alt="" />
                                                </div>
                                                <div class="text-container">
                                                    <h6>Title 02</h6>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                    <h5> <i class="fa fa-calendar"></i>{' '}24th March 2021</h5>
                                                    <h5> <i class="fa fa-map-marker"></i>{' '}SLIIT</h5> </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3" data-aos="zoom-out-down">
                                    <a href="!#">
                                        <div class="card-flyer">
                                            <div class="text-box">
                                                <div class="image-box">
                                                    <img src="https://cdn.pixabay.com/photo/2018/04/06/13/46/poly-3295856_960_720.png" alt="" />
                                                </div>

                                                <div class="text-container">
                                                    <h6>Title 03</h6>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                    <h5> <i class="fa fa-calendar"></i>{' '}24th March 2021</h5>
                                                    <h5> <i class="fa fa-map-marker"></i>{' '}SLIIT</h5></div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3" data-aos="zoom-out-down">
                                    <a href="!#">
                                        <div class="card-flyer">
                                            <div class="text-box">
                                                <div class="image-box">
                                                    <img src="https://cdn.pixabay.com/photo/2018/03/30/15/12/dog-3275593_960_720.jpg" alt="" />
                                                </div>
                                                <div class="text-container">
                                                    <h6>Title 04</h6>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                    <h5> <i class="fa fa-calendar"></i>{' '}24th March 2021</h5>
                                                    <h5> <i class="fa fa-map-marker"></i>{' '}SLIIT</h5> </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-12 mt-4 text-center">
                            <a href="/past-events">
                                <button class="main-btn" type="submit">
                                    View More {' '}
                                    <i class="fa fa-arrow-circle-right" style={{ marginLeft: 8 }}></i>
                                </button>
                            </a>
                        </div>
                    </div>

                    <header class="section-header">
                        <h4 style={{ paddingTop: 50 }}>Webinars</h4>
                        {/* <p>
                            Laudem latine persequeris id sed, ex fabulas
                            delectus quo. No vel partiendo abhorreant
                            vituperatoribus.
                        </p> */}
                    </header>

                    <div id="cards_landscape_wrap-2">
                        <div class="container">
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3" data-aos="zoom-out-down">
                                    <a href="!#">
                                        <div class="card-flyer">
                                            <div class="text-box">
                                                <div class="image-box">
                                                    <img src={angelica} alt="" />
                                                </div>
                                                <div class="text-container">
                                                    <h6>Title 01</h6>
                                                    <a href="/past-events">
                                                        <button class="view-btn" type="submit">
                                                            View
                                                        </button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3" data-aos="zoom-out-down">
                                    <a href="!#">
                                        <div class="card-flyer">
                                            <div class="text-box">
                                                <div class="image-box">
                                                    <img src={girls} alt="" />
                                                </div>
                                                <div class="text-container">
                                                    <h6>Title 02</h6>
                                                    <a href="/past-events">
                                                        <button class="view-btn" type="submit">
                                                            View
                                                        </button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3" data-aos="zoom-out-down">
                                    <a href="!#">
                                        <div class="card-flyer">
                                            <div class="text-box">
                                                <div class="image-box">
                                                    <img src="https://cdn.pixabay.com/photo/2018/04/06/13/46/poly-3295856_960_720.png" alt="" />
                                                </div>

                                                <div class="text-container">
                                                    <h6>Title 03</h6>
                                                    <a href="/past-events">
                                                        <button class="view-btn" type="submit">
                                                            View
                                                        </button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3" data-aos="zoom-out-down">
                                    <a href="!#">
                                        <div class="card-flyer">
                                            <div class="text-box">
                                                <div class="image-box">
                                                    <img src="https://cdn.pixabay.com/photo/2018/03/30/15/12/dog-3275593_960_720.jpg" alt="" />
                                                </div>
                                                <div class="text-container">
                                                    <h6>Title 04</h6>
                                                    <a href="/past-events">
                                                        <button class="view-btn" type="submit">
                                                            View
                                                        </button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-12 mt-4 text-center">
                            <a href="/past-events">
                                <button class="main-btn" type="submit">
                                    View More {' '}
                                    <i class="fa fa-arrow-circle-right" style={{ marginLeft: 8 }}></i>
                                </button>
                            </a>
                        </div>
                    </div>
                </div >
            </section >
        </div >
    )
}
