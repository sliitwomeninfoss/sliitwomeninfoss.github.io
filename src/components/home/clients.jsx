import React, { Component } from 'react';
import Client1 from '../../assets/img/clients/client-1.png'
import Client2 from '../../assets/img/clients/client-2.png'
import Client3 from '../../assets/img/clients/client-3.png'
import Client4 from '../../assets/img/clients/client-4.png'
import Client5 from '../../assets/img/clients/client-5.png'
import Client6 from '../../assets/img/clients/client-6.png'
import Client7 from '../../assets/img/clients/client-7.png'
import Client8 from '../../assets/img/clients/client-8.png'

export default class Clients extends Component {
    render() {
        return (
            <div>
                <section id="clients" class="section-bg">

                    <div class="container" data-aos="fade-up">

                        <div class="section-header">
                            <h3>Our CLients</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque dere santome nida.</p>
                        </div>

                        <div class="row no-gutters clients-wrap clearfix" data-aos="zoom-in" data-aos-delay="100">

                            <div class="col-lg-3 col-md-4 col-xs-6">
                                <div class="client-logo">
                                    <img src={Client1} class="img-fluid" alt="" />
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-4 col-xs-6">
                                <div class="client-logo">
                                    <img src={Client2} class="img-fluid" alt="" />
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-4 col-xs-6">
                                <div class="client-logo">
                                    <img src={Client3} class="img-fluid" alt="" />
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-4 col-xs-6">
                                <div class="client-logo">
                                    <img src={Client4} class="img-fluid" alt="" />
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-4 col-xs-6">
                                <div class="client-logo">
                                    <img src={Client5} class="img-fluid" alt="" />
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-4 col-xs-6">
                                <div class="client-logo">
                                    <img src={Client6} class="img-fluid" alt="" />
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-4 col-xs-6">
                                <div class="client-logo">
                                    <img src={Client7} class="img-fluid" alt="" />
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-4 col-xs-6">
                                <div class="client-logo">
                                    <img src={Client8} class="img-fluid" alt="" />
                                </div>
                            </div>

                        </div>

                    </div>

                </section>
            </div>
        )
    }
}