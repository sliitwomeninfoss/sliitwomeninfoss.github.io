import gif from '../../assets/img/logos/Innovation.gif'
import Mascot from './Mascot'
import Blogs from './Blogs'
import PastEvents from './PastEvents'
import Hackathon from './Hackathon'
import WeAre from './WeAre'
import Webinars from './Webinars'
// import logo from '../../assets/img/logos/WIF-Dark.png'
// import { Link } from 'react-router-dom'
import NavBar from '../../components/common/navBar'
import Footer from '../../components/common/footer'
export default function Home() {
    return (
        <>
            <div>
                <NavBar />
                <section id="intro" class="clearfix">
                    <div class="container" data-aos="fade-up">
                        <div
                            class="intro-img"
                            data-aos="zoom-out"
                            data-aos-delay="200"
                        >
                            <img src={gif} alt="" class="img-fluid" />
                        </div>
                        <div
                            class="intro-info px-4"
                            data-aos="zoom-in"
                            data-aos-delay="100"
                        >
                            {/* <h2>
                            SLIIT
                            <br />
                            <span>Women In FOSS</span>
                            <br />
                            Community!
                        </h2> */}
                            <h2>SLIIT Women In FOSS Community</h2>
                            <p>
                                We are a group of enthusiastic volunteers who
                                believe in the usage and contribution of Free
                                Open Source Software (FOSS). Our community's
                                primary objective is to promote, inspire and
                                diversify the usage of Free Open Source Software
                                at SLIIT amongst empowered women.
                            </p>
                            <div>
                                {/* <a
                                href="!#"
                                class="btn-get-started scrollto">
                                Become a Member
                            </a> */}
                                <a
                                    href="https://forms.gle/VSPz9ZmXNYtpCwAQ8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button class="main-btn" type="submit">
                                        Become A Member
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <main id="main">
                    <WeAre />
                    <Mascot />
                    <Hackathon />
                    <PastEvents />
                    <Webinars />
                    <Blogs />
                </main>
            </div>

            <Footer />
        </>
    )
}
