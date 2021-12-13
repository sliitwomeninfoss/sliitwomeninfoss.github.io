import eventImg from '../../assets/img/events/A Chat With Angelicaa.jpg'

export default function UpcomingEventCard() {
    return (
        <div class="row justify-content-center">
            <div class="col-lg-9">
                <div class="row event-card justify-content-center">
                    <div id="event-date" class="col-lg-2">
                        <h1>12</h1>
                        <h2>Jan</h2>
                    </div>
                    <img
                        id="event-image"
                        class="col-lg-4"
                        src={eventImg}
                        alt=""
                    />
                    <div id="event-description" class="col-lg-6">
                        <p id="title">A chat with Angelica</p>
                        <p id="date"><i class="fa fa-calendar"></i>{' '}12 Jan 2022 | 6.00PM</p>
                        <p id="speaker"><i class="fa fa-microphone"></i>{' '}Angelica Hill</p>
                        <p id="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
