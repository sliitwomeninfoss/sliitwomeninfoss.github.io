import EventsData from '../utilities/data/Events.json'
import WebinarsData from '../utilities/data/Webinars.json'
import { useState, useEffect, useRef } from 'react'
import ReactPaginate from 'react-paginate'
import UpcomingEventCard from '../components/events/upcomingEventCard'
import logo from '../assets/img/logos/WIF-Dark.png'

// Upcoming events card change delay
const delay = 7000

export default function PastEvents() {
    const [page, setPage] = useState(0)
    const [index, setIndex] = useState(0)
    const timeoutRef = useRef(null)
    const [events] = useState(EventsData.Events)
    const eventsPerPage = 4
    const numberOfEmployeesVisited = page * eventsPerPage
    const totalPages = Math.ceil(events.length / eventsPerPage)

    var numUpcomingEventsWithDetails = 0;

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        countEventsWithDetails()
    }

    function countEventsWithDetails() {
        EventsData.Upcoming_Events.forEach(event => {
            if (event.date !== "" && event.time !== "") {
                ++numUpcomingEventsWithDetails
            }
        });
    }

    useEffect(() => {
        countEventsWithDetails();
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === numUpcomingEventsWithDetails - 1 ? 0 : prevIndex + 1
                ),
            delay
        )

        return () => {
            resetTimeout()
        }
        // eslint-disable-next-line
    }, [index])

    const displayEvent = events
        .slice(
            numberOfEmployeesVisited,
            numberOfEmployeesVisited + eventsPerPage
        )
        .map((event, index) => (
            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <div class="card-flyer">
                    <div class="text-box">
                        <div class="image-box">
                            <img src={event.image} alt="" />
                        </div>
                        <div class="text-container">
                            <h6>{event.title}</h6>
                            <p>{event.description}</p>
                        </div>
                        <h5> <i class="fa fa-microphone"></i>{' '}{event.speaker}</h5>
                        <h5> <i class="fa fa-calendar"></i>{' '}{event.date}</h5>
                    </div>
                </div>
            </div>
        ))

    const changePage = ({ selected }) => {
        setPage(selected)
    }

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

            <section id="past-events">
                <div class="container" data-aos="zoom-in">
                    {EventsData.Upcoming_Events.length > 0 ? <header class="section-header">
                        <h3>Upcoming Events</h3>
                        {/* <p>
                            No events at this moment. Follow us to get updates.
                        </p> */}
                        <br />
                        <div>
                            <div
                                className="slideshowSlider"
                                style={{
                                    transform: `translate3d(${-index * 100
                                        }%, 0, 0)`,
                                }}
                            >
                                {EventsData.Upcoming_Events.map(
                                    (event, index) => (
                                        event.date !== "" && event.time !== "" ?
                                            <div
                                                className="upcoming-event-slide"
                                                key={index}
                                            >
                                                <UpcomingEventCard
                                                    image={event.image}
                                                    date={event.date}
                                                    time={event.time}
                                                    title={event.title}
                                                    speaker={event.speaker}
                                                    description={event.description}
                                                />
                                            </div> : null
                                    )
                                )}
                            </div>
                            <div>
                                {EventsData.Upcoming_Events.map(
                                    (event, cardIndex) => (
                                        event.date !== "" && event.time !== "" ?
                                            <div
                                                className={`slideshowDot ${index === cardIndex
                                                    ? 'active'
                                                    : ''
                                                    }`}
                                                key={cardIndex}
                                                onClick={() => setIndex(cardIndex)}
                                            /> : null
                                    )
                                )}
                            </div>
                        </div>
                    </header> : null}

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
                            <div class="row justify-content-center">
                                {displayEvent}
                            </div>
                        </div>
                    </div>
                    <ReactPaginate
                        previousLabel={'< Previous'}
                        nextLabel={'Next >'}
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
                            <div class="row justify-content-center">
                                {WebinarsData.Latest_Webinars.map(
                                    (webinar, index) => (
                                        <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3" data-aos="zoom-out-down">
                                            <a href={webinar.youtube_link}>
                                                <div class="card-flyer" style={{ height: 470 }}>
                                                    <div class="text-box">
                                                        <div class="image-box">
                                                            <img src={webinar.image} alt="" />
                                                        </div>
                                                        <div class="text-container" style={{ height: 150 }}>
                                                            <h6>{webinar.title}</h6>
                                                        </div>
                                                        <a href={webinar.youtube_link}>
                                                            <button class="view-btn">
                                                                View
                                                            </button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    )
                                )}
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
                </div>
            </section>
        </div>
    )
}
