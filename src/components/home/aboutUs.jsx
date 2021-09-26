import React, { Component } from 'react';
import aboutImage from '../../assets/img/other/about-img.svg';
import extra1 from '../../assets/img/other/about-extra-1.svg';
import extra2 from '../../assets/img/other/about-extra-2.svg';

export default class AboutUs extends Component {
    render() {
        return (
            <div>
                <section id="about">
                    <div class="container" data-aos="fade-up">
                        <header class="section-header">
                            <h3>About Us</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </header>
                        <div class="row about-container">
                            <div class="col-lg-6 content order-lg-1 order-2">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
                                    <div class="icon"><i class="fas fa-shopping-bag"></i></div>
                                    <h4 class="title"><a href="">Eiusmod Tempor</a></h4>
                                    <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                                </div>
                                <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
                                    <div class="icon"><i class="fa fa-photo"></i></div>
                                    <h4 class="title"><a href="">Magni Dolores</a></h4>
                                    <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                </div>
                                <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
                                    <div class="icon"><i class="fa fa-bar-chart"></i></div>
                                    <h4 class="title"><a href="">Dolor Sitema</a></h4>
                                    <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                                </div>
                            </div>
                            <div class="col-lg-6 background order-lg-2" data-aos="zoom-in">
                                <img src={aboutImage} class="img-fluid" alt="" />
                            </div>
                        </div>
                        <div class="row about-extra">
                            <div class="col-lg-6" data-aos="fade-right">
                                <img src={extra1} class="img-fluid" alt="" />
                            </div>
                            <div class="col-lg-6 pt-5 pt-lg-0" data-aos="fade-left">
                                <h4>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h4>
                                <p>
                                    Ipsum in aspernatur ut possimus sint. Quia omnis est occaecati possimus ea. Quas molestiae perspiciatis occaecati qui rerum. Deleniti quod porro sed quisquam saepe. Numquam mollitia recusandae non ad at et a.
                                </p>
                                <p>
                                    Ad vitae recusandae odit possimus. Quaerat cum ipsum corrupti. Odit qui asperiores ea corporis deserunt veritatis quidem expedita perferendis. Qui rerum eligendi ex doloribus quia sit. Porro rerum eum eum.
                                </p>
                            </div>
                        </div>
                        <div class="row about-extra">
                            <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
                                <img src={extra2} class="img-fluid" alt="" />
                            </div>
                            <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-right">
                                <h4>Neque saepe temporibus repellat ea ipsum et. Id vel et quia tempora facere reprehenderit.</h4>
                                <p>
                                    Delectus alias ut incidunt delectus nam placeat in consequatur. Sed cupiditate quia ea quis. Voluptas nemo qui aut distinctio. Cumque fugit earum est quam officiis numquam. Ducimus corporis autem at blanditiis beatae incidunt sunt.
                                </p>
                                <p>
                                    Voluptas saepe natus quidem blanditiis. Non sunt impedit voluptas mollitia beatae. Qui esse molestias. Laudantium libero nisi vitae debitis. Dolorem cupiditate est perferendis iusto.
                                </p>
                                <p>
                                    Eum quia in. Magni quas ipsum a. Quis ex voluptatem inventore sint quia modi. Numquam est aut fuga mollitia exercitationem nam accusantium provident quia.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}