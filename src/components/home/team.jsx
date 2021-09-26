import React, { Component } from 'react';
import Team1 from '../../assets/img/team/team-1.jpg'
import Team2 from '../../assets/img/team/team-2.jpg'
import Team3 from '../../assets/img/team/team-3.jpg'
import Team4 from '../../assets/img/team/team-4.jpg'

export default class Team extends Component {
    render() {
        return (
            <div>
                <section id="team">
                    <div class="container" data-aos="fade-up">
                        <div class="section-header">
                            <h3>Team</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                        </div>

                        <div class="row">

                            <div class="col-lg-3 col-md-6" data-aos="zoom-out" data-aos-delay="100">
                                <div class="member">
                                    <img src={Team1} class="img-fluid" alt="" />
                                    <div class="member-info">
                                        <div class="member-info-content">
                                            <h4>Walter White</h4>
                                            <span>Chief Executive Officer</span>
                                            <div class="social">
                                                <a href=""><i class="fa fa-twitter"></i></a>
                                                <a href=""><i class="fa fa-facebook"></i></a>
                                                <a href=""><i class="fa fa-google-plus"></i></a>
                                                <a href=""><i class="fa fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6" data-aos="zoom-out" data-aos-delay="200">
                                <div class="member">
                                    <img src={Team2} class="img-fluid" alt="" />
                                    <div class="member-info">
                                        <div class="member-info-content">
                                            <h4>Sarah Jhonson</h4>
                                            <span>Product Manager</span>
                                            <div class="social">
                                                <a href=""><i class="fa fa-twitter"></i></a>
                                                <a href=""><i class="fa fa-facebook"></i></a>
                                                <a href=""><i class="fa fa-google-plus"></i></a>
                                                <a href=""><i class="fa fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6" data-aos="zoom-out" data-aos-delay="300">
                                <div class="member">
                                    <img src={Team3} class="img-fluid" alt="" />
                                    <div class="member-info">
                                        <div class="member-info-content">
                                            <h4>William Anderson</h4>
                                            <span>CTO</span>
                                            <div class="social">
                                                <a href=""><i class="fa fa-twitter"></i></a>
                                                <a href=""><i class="fa fa-facebook"></i></a>
                                                <a href=""><i class="fa fa-google-plus"></i></a>
                                                <a href=""><i class="fa fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6" data-aos="zoom-out" data-aos-delay="400">
                                <div class="member">
                                    <img src={Team4} class="img-fluid" alt="" />
                                    <div class="member-info">
                                        <div class="member-info-content">
                                            <h4>Amanda Jepson</h4>
                                            <span>Accountant</span>
                                            <div class="social">
                                                <a href=""><i class="fa fa-twitter"></i></a>
                                                <a href=""><i class="fa fa-facebook"></i></a>
                                                <a href=""><i class="fa fa-google-plus"></i></a>
                                                <a href=""><i class="fa fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
            </div>
        )
    }
}