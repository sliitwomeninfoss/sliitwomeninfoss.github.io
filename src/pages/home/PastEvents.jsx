import angelica from '../../assets/img/events/A Chat With Angelicaa.jpg'
import girls from '../../assets/img/events/A Girl’s Pathway To Become An IT Professional.jpg'
import sea from '../../assets/img/events/A Smooth sea never .jpg'

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

                        <div class="col-12 mt-4 text-center">
                            <a href='/past-events' class="btn btn-primary">View More</a>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}