import angelica from '../../assets/img/events/A Chat With Angelicaa.jpg'
import girls from '../../assets/img/events/A Girl’s Pathway To Become An IT Professional.jpg'
import sea from '../../assets/img/events/A Smooth sea never .jpg'
import aws from '../../assets/img/events/AWS.jpg'
import talk from '../../assets/img/events/Lets Talk EQ.jpg'
import hack from '../../assets/img/events/her_Hello World__ Registration Open.jpg'

export default function PastEvents() {

    return (
        <div>
            <section id="past-events">
                <div class="container" data-aos="zoom-in">
                    <header class="section-header">
                        <h3>Past Events</h3>
                        <p>
                            Laudem latine persequeris id sed, ex fabulas
                            delectus quo. No vel partiendo abhorreant
                            vituperatoribus.
                        </p>
                    </header>

                    <div class="row mt-5">
                        <div class="col-lg-4 py-3" data-aos='zoom-out-down'>
                            <div class="card-events">
                                <div class="header">
                                    <div class="post-thumb">
                                        <img src={angelica} alt="" />
                                    </div>
                                </div>
                                <div class="body">
                                    <h5 class="post-title"><a href="!#">A Chat with Angelica</a></h5>
                                    <div class="post-date">Posted on <a href="!#">27 Jan 2020</a></div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 py-3" data-aos='zoom-out-down'>
                            <div class="card-events">
                                <div class="header">
                                    <div class="post-thumb">
                                        <img src={girls} alt="" />
                                    </div>
                                </div>
                                <div class="body">
                                    <h5 class="post-title"><a href="!#">A Girl’s Pathway To Become An IT Professional</a></h5>
                                    <div class="post-date">Posted on <a href="!#">27 Jan 2020</a></div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 py-3" data-aos='zoom-out-down'>
                            <div class="card-events">
                                <div class="header">
                                    <div class="post-thumb">
                                        <img src={sea} alt="" />
                                    </div>
                                </div>
                                <div class="body">
                                    <h5 class="post-title"><a href="!#">A Smooth sea never</a></h5>
                                    <div class="post-date">Posted on <a href="!#">27 Jan 2020</a></div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 py-3" data-aos='zoom-out-down'>
                            <div class="card-events">
                                <div class="header">
                                    <div class="post-thumb">
                                        <img src={aws} alt="" />
                                    </div>
                                </div>
                                <div class="body">
                                    <h5 class="post-title"><a href="!#">AWS</a></h5>
                                    <div class="post-date">Posted on <a href="!#">27 Jan 2020</a></div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 py-3" data-aos='zoom-out-down'>
                            <div class="card-events">
                                <div class="header">
                                    <div class="post-thumb">
                                        <img src={talk} alt="" />
                                    </div>
                                </div>
                                <div class="body">
                                    <h5 class="post-title"><a href="!#">Lets Talk EQ</a></h5>
                                    <div class="post-date">Posted on <a href="!#">27 Jan 2020</a></div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 py-3" data-aos='zoom-out-down'>
                            <div class="card-events">
                                <div class="header">
                                    <div class="post-thumb">
                                        <img src={hack} alt="" />
                                    </div>
                                </div>
                                <div class="body">
                                    <h5 class="post-title"><a href="!#">her Hello World Registration Open</a></h5>
                                    <div class="post-date">Posted on <a href="!#">27 Jan 2020</a></div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 mt-4 text-center">
                            <a href='/past-events' class="btn btn-primary">View More</a>
                        </div>
                    </div>

                    {/* Counter */}
                    {/* <div class="row counters" data-aos="fade-up" data-aos-delay="100"> */}
                    {/* Clients Counter */}
                    {/* <div class="col-lg-3 col-6 text-center">
                                <span data-toggle="counter-up">274</span>
                                <p>Clients</p>
                            </div> */}
                    {/* Projects */}
                    {/* <div class="col-lg-3 col-6 text-center">
                                <span data-toggle="counter-up">421</span>
                                <p>Projects</p>
                            </div> */}
                    {/* Hours Of Support */}
                    {/* <div class="col-lg-3 col-6 text-center">
                                <span data-toggle="counter-up">1,364</span>
                                <p>Hours Of Support</p>
                            </div> */}
                    {/* Hard Workers */}
                    {/* <div class="col-lg-3 col-6 text-center">
                                <span data-toggle="counter-up">18</span>
                                <p>Hard Workers</p>
                            </div>
                        </div> */}
                </div>
            </section>
        </div>
    )
}