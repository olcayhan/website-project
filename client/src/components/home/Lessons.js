import React, { useEffect, useState } from 'react'
import gitar from "../../assets/gitar1.jpg"
import piyano from "../../assets/piyano1.jpg"
import cello from "../../assets/cello1.jpg"
import keman from "../../assets/keman1.jpg"
import flut from "../../assets/flut1.jpg"
import baglama from "../../assets/baglama1.jpg"

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export default function Lessons() {

    const [length, setLength] = useState(3)

    useEffect(() => {
        if (window.innerWidth > 900) setLength(3)
        else setLength(1)
        console.log(window.innerWidth);
    }, [window.innerWidth])

    return (
        <section id='lessons' className="bg-dark">
            <OwlCarousel
                autoheight="true"
                autoplayTimeout={2000}
                slidetransition="linear"
                stagePadding={50}
                rewind
                autoplayHoverPause
                items={length}
                className="owl-theme"
                navSpeed={800}
                navText={[
                    "<div class='nav-button1 owl-prev'><i class='fas fa-angle-left'></i></div>",
                    "<div class='nav-button2 owl-next'><i class='fas fa-angle-right'></i></div>"]}
                nav
            >

                <div>
                    <button className="cardLesson " style={{ backgroundImage: `url(${gitar})` }}>
                        <div className="container text-light">
                            <h2>Gitar</h2>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>

                        </div>
                    </button>
                </div>

                <div  >
                    <button className="cardLesson" style={{ backgroundImage: `url(${keman})` }}>
                        <div className="container text-light">
                            <h2>Keman</h2>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        </div>
                    </button>
                </div>

                <div>
                    <button className="cardLesson" style={{ backgroundImage: `url(${piyano})` }}>
                        <div className="container text-light">
                            <h2>Piyano</h2>

                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>

                        </div>
                    </button>
                </div>

                <div  >
                    <button className="cardLesson" style={{ backgroundImage: `url(${flut})` }}>
                        <div className="container text-light">
                            <h2>Fl??t</h2>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>

                        </div>
                    </button>
                </div>

                <div  >
                    <button className="cardLesson" style={{ backgroundImage: `url(${cello})` }}>
                        <div className="container text-light">
                            <h2>??ello</h2>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>

                        </div>
                    </button>
                </div>
                <div  >
                    <button className="cardLesson" style={{ backgroundImage: `url(${baglama})` }}>
                        <div className="container text-light">
                            <h2>Ba??lama</h2>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>

                        </div>
                    </button>
                </div>

            </OwlCarousel>
        </section >
    )
}
