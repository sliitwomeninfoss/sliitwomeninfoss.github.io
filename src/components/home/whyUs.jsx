import React, { Component } from 'react';

export default class WhyUs extends Component {
    render() {
        return (
            <div>
                <section id="why-us">
                    <div class="container" data-aos="fade-up">
                        <header class="section-header">
                            <h3>Why choose us?</h3>
                            <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p>
                        </header>

                        <div class="row row-eq-height justify-content-center">

                            <div class="col-lg-4 mb-4">
                                <div class="card" data-aos="zoom-in" data-aos-delay="100">
                                    <i class="fa fa-diamond"></i>
                                    <div class="card-body">
                                        <h5 class="card-title">Corporis dolorem</h5>
                                        <p class="card-text">Deleniti optio et nisi dolorem debitis. Aliquam nobis est temporibus sunt ab inventore officiis aut voluptatibus.</p>
                                        <a href="#" class="readmore">Read more </a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 mb-4">
                                <div class="card" data-aos="zoom-in" data-aos-delay="200">
                                    <i class="fa fa-language"></i>
                                    <div class="card-body">
                                        <h5 class="card-title">Voluptates dolores</h5>
                                        <p class="card-text">Voluptates nihil et quis omnis et eaque omnis sint aut. Ducimus dolorum aspernatur.</p>
                                        <a href="#" class="readmore">Read more </a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 mb-4">
                                <div class="card" data-aos="zoom-in" data-aos-delay="300">
                                    <i class="fa fa-object-group"></i>
                                    <div class="card-body">
                                        <h5 class="card-title">Eum ut aspernatur</h5>
                                        <p class="card-text">Autem quod nesciunt eos ea aut amet laboriosam ab. Eos quis porro in non nemo ex. </p>
                                        <a href="#" class="readmore">Read more </a>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="row counters" data-aos="fade-up" data-aos-delay="100">

                            <div class="col-lg-3 col-6 text-center">
                                <span data-toggle="counter-up">274</span>
                                <p>Clients</p>
                            </div>

                            <div class="col-lg-3 col-6 text-center">
                                <span data-toggle="counter-up">421</span>
                                <p>Projects</p>
                            </div>

                            <div class="col-lg-3 col-6 text-center">
                                <span data-toggle="counter-up">1,364</span>
                                <p>Hours Of Support</p>
                            </div>

                            <div class="col-lg-3 col-6 text-center">
                                <span data-toggle="counter-up">18</span>
                                <p>Hard Workers</p>
                            </div>

                        </div>

                    </div>
                </section>
            </div>
        )
    }
}