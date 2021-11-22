import angelica from '../../assets/img/events/A Chat With Angelicaa.jpg'
import girls from '../../assets/img/events/A Girl’s Pathway To Become An IT Professional.jpg'
import sea from '../../assets/img/events/A Smooth sea never .jpg'

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
                        <div class="container">
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
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
                                                    <h5> <i class="fa fa-map-marker"></i>{' '}SLIIT</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
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
                                                    <h5> <i class="fa fa-map-marker"></i>{' '}SLIIT</h5></div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
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
                                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
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
                </div>
            </section>
        </div>
    )
}
