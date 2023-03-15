import { Link } from 'react-router-dom'
import EventsData from '../../utilities/data/Events.json'

export default function PastEvents() {
    return (
        <div>
            <section id="past-events-home">
                <div class="container" data-aos="zoom-in">
                    <header class="section-header">
                        <h3>Past Events</h3>
                        {/* <p>
                            Laudem latine persequeris id sed, ex fabulas
                            delectus quo. No vel partiendo abhorreant
                            vituperatoribus.
                        </p> */}
                    </header>

                    {/* <div class="container">
                        <div class="row">
                            <div class="col-md-6 col-lg-4">
                         
                                <div class="card-box">
                                    <div class="card-thumbnail">
                                        <img src={angelica} class="img-fluid" alt=""/>
                                    </div>
                                    <h3><a href="#" class="mt-2 text-danger">What is Lorem Ipsum?</a></h3>
                                    <p class="text-secondary">There are many variations of passages of Lorem Ipsum available,</p>
                                    <a href="#" class="btn btn-sm btn-danger float-right">Read more </a>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-4">
                          
                                <div class="card-box">
                                    <div class="card-thumbnail">
                                        <img src={girls} class="img-fluid" alt=""/>
                                    </div>
                                    <h3><a href="#" class="mt-2 text-danger">Where does it come from?</a></h3>
                                    <p class="text-secondary">There are many variations of passages of Lorem Ipsum available,</p>
                                    <a href="#" class="btn btn-sm btn-danger float-right">Read more </a>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-4">
                             
                                <div class="card-box">
                                    <div class="card-thumbnail">
                                        <img src={angelica} class="img-fluid" alt=""/>
                                    </div>
                                    <h3><a href="#" class="mt-2 text-danger">Where can I get some?</a></h3>
                                    <p class="text-secondary">There are many variations of passages of Lorem Ipsum available,</p>
                                    <a href="#" class="btn btn-sm btn-danger float-right">Read more </a>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-4">
                        
                                <div class="card-box">
                                    <div class="card-thumbnail">
                                        <img src={sea} class="img-fluid" alt=""/>
                                    </div>
                                    <h3><a href="#" class="mt-2 text-danger">Standard Lorem Ipsum passage</a></h3>
                                    <p class="text-secondary">There are many variations of passages of Lorem Ipsum available,r</p>
                                    <a href="#" class="btn btn-sm btn-danger float-right">Read more </a>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-4">
                        
                                <div class="card-box">
                                    <div class="card-thumbnail">
                                        <img src={sea} class="img-fluid" alt=""/>
                                    </div>
                                    <h3><a href="!#" class="mt-2 text-danger">What is Lorem Ipsum?</a></h3>
                                    <p class="text-secondary">There are many variations of passages of Lorem Ipsum available,</p>
                                    <a href="!#" class="btn btn-sm btn-danger float-right">Read more </a>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div id="cards_landscape_wrap-2">
                        <div class="container" style={{ paddingBottom: 0 }}>
                            <div class="row justify-content-center">
                                {EventsData.Events.slice(0, 4).map((event) => (
                                    <div class="col-xs-12 col-sm-6 col-lg-3">
                                        <div class="card-flyer card-shadow">
                                            <div class="text-box">
                                                <div class="image-box">
                                                    <img
                                                        src={event.image}
                                                        alt=""
                                                    />
                                                </div>
                                                <div class="text-container">
                                                    <h6>{event.title}</h6>
                                                    <p>{event.description}</p>
                                                </div>
                                                <h5>
                                                    {' '}
                                                    <i class="fa fa-microphone"></i>{' '}
                                                    {event.speaker}
                                                </h5>
                                                <h5>
                                                    {' '}
                                                    <i class="fa fa-calendar"></i>{' '}
                                                    {event.date}
                                                </h5>
                                            </div>
                                        </div>
                                        {/* </a> */}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-12 mt-4 text-center">
                            <Link to="/past-events">
                                <button class="main-btn" type="submit">
                                    View More{' '}
                                    <i
                                        class="fa fa-arrow-circle-right"
                                        style={{ marginLeft: 8 }}
                                    ></i>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
