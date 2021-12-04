import image from '../../assets/img/logos/hack_logo.png'

export default function Hackathon() {
    return (
        <div>
            <section id="hackathon">
                <div class="container" data-aos="fade-up">
                    <div class="row justify-content-center">
                        <div class="row about-extra">
                            <div
                                class="col-lg-6 order-1 order-lg-2"
                                data-aos="fade-left"
                            >
                                <img
                                    src={image}
                                    class="img-fluid"
                                    style={{ height: 300, width: 350 }}
                                    alt=""
                                />
                            </div>
                            <div
                                class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1"
                                data-aos="fade-right"
                            >
                                <header class="section-header">
                                    <h3>{"her <hello world v1.0 />"}</h3>
                                </header>
                                <p>
                                    The Her Hello World v1.0 : A Hackathon for 
                                    enthusiastic techie girls who desire to take on 
                                    the world by code. It's the time where                                 
                                    passionate women take on the lead as empowered 
                                    innovators, and bring out their inner frontend 
                                    development and creativity skills.                                                       
                                </p>
                                <a
                                    href="https://herhelloworld.sliitfoss.org"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button class="main-btn" type="submit">
                                        Visit Website
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
