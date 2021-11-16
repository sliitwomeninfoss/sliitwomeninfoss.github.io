import nifi from '../../assets/img/logos/nifi.jpeg'
export default function Mascot() {

    return (
        <div>
            <section id="mascot">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div class="row about-extra">
                            <div class="col-lg-6" data-aos="zoom-in-up">
                                <img
                                    // src="https://scontent.fcmb5-1.fna.fbcdn.net/v/t39.30808-6/239953728_267629351861491_5063580802383893205_n.jpg?_nc_cat=110&_nc_rgb565=1&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=_1E3V7RtIA0AX95ZVoj&_nc_ht=scontent.fcmb5-1.fna&oh=d9adcae7a8d4435dd83c91ded3f3a379&oe=61979843"
                                    src={nifi}
                                    class="img-fluid"
                                    style={{height: 300, width:300}}
                                    alt=""
                                />
                            </div>
                            <div
                                class="col-lg-6 pt-5 pt-lg-0"
                                data-aos="fade-left"
                            >
                                <header class="section-header">
                                    <h3>Meet Mascot</h3>
                                </header>
                                <p>
                                    Meet Nifi , our cute, fluffy and the official mascot of the SLIIT WIF Community! 💫
                                    <br />
                                    She's been waiting for the opportunity to join with women tech enthusiasts, and today's the day 💜✨
                                    <br/>
                                    <br />
                                    #sliitfoss #sliitwif #wif #fosslk
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}