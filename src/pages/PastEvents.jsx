import EventsData from '../utilities/data/Events.json';
import { useState } from "react";
import ReactPaginate from "react-paginate";
import angelica from '../assets/img/events/A Chat With Angelicaa.jpg'
import girls from '../assets/img/events/A Girl’s Pathway To Become An IT Professional.jpg'

export default function PastEvents() {
    const [page, setPage] = useState(0);
    const [events] = useState(EventsData.Events);
    const eventsPerPage = 4;
    const numberOfEmployeesVisited = page * eventsPerPage;
    const totalPages = Math.ceil(events.length / eventsPerPage);

    const displayEvent = events
        .slice(
            numberOfEmployeesVisited,
            numberOfEmployeesVisited + eventsPerPage
        )
        .map((event, index) => (
            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <a href="!#">
                    <div class="card-flyer">
                        <div class="text-box">
                            <div class="image-box">
                                <img src={event.image} alt="" />
                            </div>
                            <div class="text-container">
                                <h6>{event.title}</h6>
                                <p>{event.description}</p>
                                <h5> <i class="fa fa-calendar"></i>{' '}{event.date}</h5>
                                <h5> <i class="fa fa-map-marker"></i>{' '}{event.place}</h5>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        ));

    const changePage = ({ selected }) => {
        setPage(selected);
    };

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
                                {displayEvent}
                            </div>
                        </div>
                    </div>
                    <ReactPaginate
                        previousLabel={"< Previous"}
                        nextLabel={"Next >"}
                        pageCount={totalPages}
                        onPageChange={changePage}
                        // containerClassName={"navigationButtons"}
                        // previousLinkClassName={"previousButton"}
                        // nextLinkClassName={"nextButton"}
                        // disabledClassName={"navigationDisabled"}
                        // activeClassName={"navigationActive"}
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="pagination justify-content-end"
                        activeClassName="active"
                        renderOnZeroPageCount={null}
                    />
                    {/* <div class="row mt-5">
                        <div class="col-12 mt-4 text-center">
                            <a href="/past-events">
                                <button class="main-btn" type="submit">
                                    View More {' '}
                                    <i class="fa fa-arrow-circle-right" style={{ marginLeft: 8 }}></i>
                                </button>
                            </a>
                        </div>
                    </div> */}

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
                    {/* <div class="row mt-5">
                        <div class="col-12 mt-4 text-center">
                            <a href="/past-events">
                                <button class="main-btn" type="submit">
                                    View More {' '}
                                    <i class="fa fa-arrow-circle-right" style={{ marginLeft: 8 }}></i>
                                </button>
                            </a>
                        </div>
                    </div> */}
                </div >
            </section >
        </div >
    )
}
