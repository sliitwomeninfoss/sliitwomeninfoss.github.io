import WebinarsData from '../../utilities/data/Webinars.json';

export default function Webinars() {
    return (
        <div>
            <section id="we-are" class="section-bg">
                <div class="container" data-aos="zoom-in">
                    <header class="section-header">
                        <h3>Webinars</h3>
                    </header>
                    <div id="cards_landscape_wrap-2">
                        <div class="container" style={{ paddingBottom: 0 }}>
                            <div class="row justify-content-center">
                                {WebinarsData.Latest_Webinars.map((webinar, index) => (
                                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3" data-aos="zoom-out-down">
                                        <a href={webinar.youtube_link}>
                                            <div class="card-flyer" style={{height: 420, overflow: 'hidden'}}>
                                                <div class="text-box">
                                                    <div class="image-box">
                                                        <img src={webinar.image} alt="" />
                                                    </div>

                                                    <div class="text-container">
                                                        <h6>{webinar.title}</h6>
                                                        <a href={webinar.youtube_link}>
                                                            <button class="view-btn">
                                                                View
                                                            </button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-12 mt-4 text-center">
                            <a href="/past-events">
                                <button class="main-btn" type="submit">
                                    View More {' '}
                                    <i class="fa fa-arrow-circle-right" style={{ marginLeft: 8 }}></i>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
