export default function UpcomingEventCard({
    date,
    time,
    image,
    title,
    speaker,
    description,
}) {
    console.log(image)
    return (
        <div class="upcoming-event-card row justify-content-center">
            <div class="col-lg-9">
                <div class="row event-card justify-content-center">
                    <div id="event-date" class="col-lg-2">
                        <h1 id="day">{String(date).substring(0, 2)}</h1>
                        <h1 id="month">{String(date).split(' ')[1].substring(0, 3)}</h1>
                    </div>
                    <img id="event-image" class="col-lg-4" src={image} alt="" />
                    <div id="event-description" class="col-lg-6">
                        <p id="title">{title}</p>
                        <p id="date">
                            <i class="fa fa-calendar"></i> {date} | {time}
                        </p>
                        <p id="speaker">
                            <i class="fa fa-microphone"></i> {speaker}
                        </p>
                        <p id="description">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
