import React, { Component } from 'react';
import image from '../../assets/img/other/intro-img.svg';
import AboutUs from './aboutUs';
import Services from './services';
import WhyUs from './whyUs';
import Portfolio from './portfolio';
import Team from './team';
import Clients from './clients';
import ContactUs from './contactUs';

export default class Home extends Component {
    render() {
        return (
            <div>
                <section id="intro" class="clearfix">
                    <div class="container" data-aos="fade-up">
                        <div class="intro-img" data-aos="zoom-out" data-aos-delay="200">
                            <img src={image} alt="" class="img-fluid" />
                        </div>
                        <div class="intro-info" data-aos="zoom-in" data-aos-delay="100">
                            <h2>We provide<br /><span>solutions</span><br />for your business!</h2>
                            <div>
                                <a href="#about" class="btn-get-started scrollto">Get Started</a>
                                <a href="#services" class="btn-services scrollto">Our Services</a>
                            </div>
                        </div>
                    </div>
                </section>
                <main id="main">
                    <AboutUs />
                    <Services />
                    <WhyUs />
                    <Portfolio />
                    <Team />
                    <Clients />
                    <ContactUs />
                </main>
            </div>
        )
    }
}