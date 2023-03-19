import vission from '../assets/img/logos/vission.png'
import mission from '../assets/img/logos/mission.png'
import strategy from '../assets/img/logos/strategy.png'
// import logo from '../assets/img/logos/WIF-Dark.png'
import NavBar from '../components/common/navBar'
import Footer from '../components/common/footer'
export default function AboutUs() {
    return (
        <div>
            <NavBar />

            <section id="about" class="clearfix">
                <div class="container" data-aos="fade-up">
                    <header class="section-header">
                        <h3>About Us</h3>
                        {/* <p>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </p> */}
                    </header>
                    {/* <div class="row about-container">
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
                    </div> */}
                    <div class="row about-extra">
                        <div
                            class="col-lg-6 order-1 order-lg-2"
                            data-aos="fade-left"
                        >
                            <img
                                src={vission}
                                class="img-fluid"
                                alt=""
                                style={{ height: 300, width: 300 }}
                            />
                        </div>
                        <div
                            class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1"
                            data-aos="fade-right"
                        >
                            <h4>Our Vision</h4>
                            <p>
                                Women In FOSS is an all girls society with its
                                members being female students from the Faculty
                                of Computing of SLIIT. The society provides a
                                supportive environment to help girls grow as
                                professionals in the field of IT with attention
                                to Free/Open-Source Software.
                            </p>
                        </div>
                    </div>
                    <div class="row about-extra">
                        <div class="col-lg-6" data-aos="fade-right">
                            <img
                                src={mission}
                                class="img-fluid"
                                alt=""
                                style={{ height: 300, width: 400 }}
                            />
                        </div>
                        <div class="col-lg-6 pt-5 pt-lg-0" data-aos="fade-left">
                            <h4>Our Mission</h4>
                            <p>
                                The purpose of the SLIIT Women In FOSS Community
                                is to empower the potential and the contribution
                                of women towards Free/Open-Source Software by
                                providing opportunities and encouraging women to
                                actively engage in Free/Open-Source Software
                                development.
                            </p>
                        </div>
                    </div>
                    <div class="row about-extra">
                        <div
                            class="col-lg-6 order-1 order-lg-2"
                            data-aos="fade-left"
                        >
                            <img
                                src={strategy}
                                class="img-fluid"
                                alt=""
                                style={{ height: 290, width: 300 }}
                            />
                        </div>
                        <div
                            class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1"
                            data-aos="fade-right"
                        >
                            <h4>Our Strategy</h4>
                            <p>
                                Infrastructural and consulting support for
                                FOSS-related initiatives and groups in Sri
                                Lanka. And to help women in the field of tech to
                                develop their personalities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <Footer />
        </div>
    )
}
