import React, { Component } from 'react';
import App1 from '../../assets/img/portfolio/app1.jpg';
import App2 from '../../assets/img/portfolio/app2.jpg';
import App3 from '../../assets/img/portfolio/app3.jpg';
import Card1 from '../../assets/img/portfolio/card1.jpg';
import Card2 from '../../assets/img/portfolio/card2.jpg';
import Card3 from '../../assets/img/portfolio/card3.jpg';
import Web1 from '../../assets/img/portfolio/web1.jpg';
import Web2 from '../../assets/img/portfolio/web2.jpg';
import Web3 from '../../assets/img/portfolio/web3.jpg';

export default class Portfolio extends Component {
    render() {
        return (
            <div>
                <section id="portfolio" class="clearfix">
                    <div class="container" data-aos="fade-up">
                        <header class="section-header">
                            <h3 class="section-title">Our Portfolio</h3>
                        </header>
                        <div class="row" data-aos="fade-up" data-aos-delay="100">
                            <div class="col-lg-12">
                                <ul id="portfolio-flters">
                                    <li data-filter="*" class="filter-active">All</li>
                                    <li data-filter=".filter-app">App</li>
                                    <li data-filter=".filter-card">Card</li>
                                    <li data-filter=".filter-web">Web</li>
                                </ul>
                            </div>
                        </div>
                        <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
                            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div class="portfolio-wrap">
                                    <img src={App1} class="img-fluid" alt="" />
                                    <div class="portfolio-info">
                                        <h4><a
                                        // href="portfolio-details.html"
                                        >App 1</a></h4>
                                        <p>App</p>
                                        <div>
                                            <a href="" data-gall="portfolioGallery" title="App 1" class="venobox link-preview"><i class="ion ion-eye"></i></a>
                                            <a
                                                // href="portfolio-details.html" 
                                                class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div class="portfolio-wrap">
                                    <img src={Web3} class="img-fluid" alt="" />
                                    <div class="portfolio-info">
                                        <h4>
                                            <a
                                            // href="portfolio-details.html"
                                            >
                                                Web 3
                                            </a>
                                        </h4>
                                        <p>Web</p>
                                        <div>
                                            <a href="../public/img/portfolio/web3.jpg" class="venobox link-preview" data-gall="portfolioGallery" title="Web 3"><i class="ion ion-eye"></i></a>
                                            <a
                                                // href="portfolio-details.html" 
                                                class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div class="portfolio-wrap">
                                    <img src={App2} class="img-fluid" alt="" />
                                    <div class="portfolio-info">
                                        <h4><a
                                        // href="portfolio-details.html"
                                        >App 2</a></h4>
                                        <p>App</p>
                                        <div>
                                            <a href="../public/img/portfolio/app2.jpg" class="venobox link-preview" data-gall="portfolioGallery" title="App 2"><i class="ion ion-eye"></i></a>
                                            <a
                                                // href="portfolio-details.html" 
                                                class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div class="portfolio-wrap">
                                    <img src={Card2} class="img-fluid" alt="" />
                                    <div class="portfolio-info">
                                        <h4><a
                                        // href="portfolio-details.html"
                                        >Card 2</a></h4>
                                        <p>Card</p>
                                        <div>
                                            <a href="../public/img/portfolio/card2.jpg" class="venobox link-preview" data-gall="portfolioGallery" title="Card 2"><i class="ion ion-eye"></i></a>
                                            <a
                                                //  href="portfolio-details.html" 
                                                class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div class="portfolio-wrap">
                                    <img src={Web2} class="img-fluid" alt="" />
                                    <div class="portfolio-info">
                                        <h4><a
                                        // href="portfolio-details.html"
                                        >Web 2</a></h4>
                                        <p>Web</p>
                                        <div>
                                            <a href="../public/img/portfolio/web2.jpg" class="venobox link-preview" data-gall="portfolioGallery" title="Web 2"><i class="ion ion-eye"></i></a>
                                            <a
                                                //  href="portfolio-details.html"
                                                class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div class="portfolio-wrap">
                                    <img src={App3} class="img-fluid" alt="" />
                                    <div class="portfolio-info">
                                        <h4><a
                                        // href="portfolio-details.html"
                                        >App 3</a></h4>
                                        <p>App</p>
                                        <div>
                                            <a href="../public/img/portfolio/app3.jpg" class="venobox link-preview" data-gall="portfolioGallery" title="App 3"><i class="ion ion-eye"></i></a>
                                            <a
                                                // href="portfolio-details.html" 
                                                class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div class="portfolio-wrap">
                                    <img src={Card1} class="img-fluid" alt="" />
                                    <div class="portfolio-info">
                                        <h4><a
                                        // href="portfolio-details.html"
                                        >Card 1</a></h4>
                                        <p>Card</p>
                                        <div>
                                            <a href="../public/img/portfolio/card1.jpg" class="venobox link-preview" data-gall="portfolioGallery" title="Card 1"><i class="ion ion-eye"></i></a>
                                            <a
                                                // href="portfolio-details.html" 
                                                class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div class="portfolio-wrap">
                                    <img src={Card3} class="img-fluid" alt="" />
                                    <div class="portfolio-info">
                                        <h4><a
                                        // href="portfolio-details.html"
                                        >Card 3</a></h4>
                                        <p>Card</p>
                                        <div>
                                            <a href="../public/img/portfolio/card3.jpg" class="venobox link-preview" data-gall="portfolioGallery" title="Card 3"><i class="ion ion-eye"></i></a>
                                            <a
                                                // href="portfolio-details.html" 
                                                class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div class="portfolio-wrap">
                                    <img src={Web1} class="img-fluid" alt="" />
                                    <div class="portfolio-info">
                                        <h4><a
                                        // href="portfolio-details.html"
                                        >Web 1</a></h4>
                                        <p>Web</p>
                                        <div>
                                            <a href="../public/img/portfolio/web1.jpg" class="venobox link-preview" data-gall="portfolioGallery" title="Web 1"><i class="ion ion-eye"></i></a>
                                            <a
                                                // href="portfolio-details.html" 
                                                class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
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