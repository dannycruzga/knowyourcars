import React from "react";
import "./About.css";
import ourstory from "./images/ourstory.png";

const About = () => {
    return (
        <main>
            <section className="about-hero">
                <div className="about-hero-text">
                    <h4>ABOUT KNOWYOURCARS</h4>
                    <h1>Every Car Has a Story.<br />
                        We Help You <span>Discover It.</span>
                    </h1>
                    <p>KnowYourCars brings car information together in one
                        place for anyone interested in learning more about the
                        automotive world. Visitors can compare vehicles,
                        discover important models, explore performance, and
                        see how prices vary across different brands. From early
                        automobiles to today's newest vehicles, the site
                        makes it simple to discover what makes each car
                        and manufacturer unique.
                    </p>
                </div>
            </section>

            <section className="story">
                <div className="story-image">
                    <img src={ourstory} alt="Past and present cars" />
                    <p className="then">THEN <span>1964</span></p>
                    <p className="now">NOW <span>2026</span></p>
                </div>

                <div className="story-text">
                    <h4>OUR STORY</h4>
                    <h2>Built for People<br />
                        Who Love Cars
                    </h2>
                    <p>KnowYourCars was created by car enthusiasts, for car
                        enthusiasts. We wanted to build a place where people can
                        easily explore the history, models, and innovations of the
                        world's most recognizable car brands. Whether you're looking
                        to learn, compare, or simply feed your curiosity, our goal is to
                        make the world of cars more accessible and enjoyable for
                        everyone.
                    </p>
                </div>
            </section>

            <section className="purpose">
                <div className="purpose-text">
                    <h4>OUR PURPOSE</h4>
                    <h2>Connecting the Past,<br />
                        Present, and <span>Future of Cars.</span>
                    </h2>
                    <p>KnowYourCars is designed to connect the past, present,
                        and future of the automotive world. Our purpose is to
                        make that information easy to explore while helping
                        visitors develop a greater appreciation for the vehicles
                        that continue to shape automotive history.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default About;