import React from "react";
import BlogsData from '../../utilities/data/Blogs.json'
const delay = 3500;

export default function Blogs() {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === BlogsData.Latest_Blogs.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <section id="blogs" class="clearfix">
            <div class="container" data-aos="fade-up">
                <div className="row">
                    <div class="row about-extra">
                        <div class="col-lg-6" data-aos="zoom-in-up">
                            <div className="slideshow">
                                <div
                                    className="slideshowSlider"
                                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                                >
                                    {BlogsData.Latest_Blogs.map((blog, index) => (
                                        <div className="slide" key={index}>
                                            <img src={blog.image} alt="blog post" style={{ width: 400, height: 200 }} />
                                            <br />
                                            <h5 style={{ marginTop: 20, fontWeight: 600, textTransform: 'capitalize' }}>{blog.blog_title}</h5>
                                            <h6 style={{ fontWeight: 500, color: 'GrayText' }}>Published On: {blog.published_date}</h6>
                                            {/* TODO: */}
                                            {/* <p style={{ marginBottom: 0 }}>
                                                {blog.tags.map(
                                                    tags =>
                                                        <span>{tags}{' '}</span>
                                                )}
                                            </p> */}
                                            <br />
                                            <a href={blog.blog_url}>
                                                <button class="read-btn" type="submit"> Read more</button>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                                <div className="slideshowDots">
                                    {BlogsData.Latest_Blogs.map((_, idx) => (
                                        <div
                                            key={idx}
                                            className={`slideshowDot${index === idx ? " active" : ""}`}
                                            onClick={() => {
                                                setIndex(idx);
                                            }}
                                        ></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 pt-5 pt-lg-0" data-aos="fade-left">
                            <header class="section-header">
                                <h3>
                                    Latest Blog Posts
                                </h3>
                            </header>
                            <p>
                                “It can be pretty rough out there for bloggers
                                who think small. You’ve got to think –
                                and play – big if you want to make
                                a larger footprint these days.”
                                <br />
                                <br />
                                – David Risley
                            </p>
                            <a href="/blogs" rel="noreferrer">
                                <button class="main-btn" type="submit">
                                    View More {' '}
                                    <i class="fa fa-arrow-circle-right" style={{ marginLeft: 8 }}></i>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}