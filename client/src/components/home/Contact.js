import React from 'react'
import "../../styles/Contact.css"
import { useInView } from 'react-intersection-observer';


export default function Contact() {

    const { ref: firstRef, inView: firstView } = useInView(
        {
            triggerOnce: true
        }
    );
    const { ref: mediaRef, inView: mediaView } = useInView(
        {
            triggerOnce: true
        }
    );

    return (
        <section id='contact' className='contact'>
            <div class="contact--container">
                <header style={firstView ? { opacity: "1" } : { opacity: "0" }}>
                    <h1>Biz Kimiz</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque at laboriosam error tenetur reiciendis dolorum eos, facilis asperiores sed enim porro, sit eaque voluptate nostrum corporis rem sequi repudiandae in iste libero provident. Harum facere, sunt tempore dolores assumenda blanditiis.</p>
                </header>


                <div class="content-form" ref={firstRef} style={firstView ? { transform: "translateX(0%)" } : { transform: "translateX(-50%)" }}>
                    <div className='contactSections' >
                        <i class="fa-sharp fa-solid fa-location-dot fa-2x"></i>
                        <h2>Adress</h2>
                        <p>
                            Lorem ipsum dolor sit.<br />
                            Lorem ipsum dolor sit.<br />
                        </p>
                    </div>

                    <div className='contactSections'>
                        <i class="fa-solid fa-phone fa-2x"></i>
                        <h2>Phone</h2>
                        <p>0500-000-0000</p>

                    </div >

                    <div className='contactSections'>
                        <i class="fa-solid fa-envelope fa-2x"></i>
                        <h2>E-mail</h2>
                        <p>indexhtml@gmail.com</p>
                    </div>
                </div>

                <form class="form" style={firstView ? { transform: "translateX(0%)" } : { transform: "translateX(50%)" }}>
                    <div class="contact-form">
                        <p>Full Name</p>

                        <input type="text" required />

                    </div>

                    <div class="contact-form">
                        <p>E-mail</p>
                        <input type="email" required />
                    </div>

                    <div class="contact-form">
                        <p>Message</p>
                        <textarea name="text"></textarea>

                    </div>

                    <div class="contact-form">
                        <input type="submit" name="submit" />
                    </div>

                </form>
                <div ref={mediaRef} className="media" style={mediaView ? { transform: "translateY(0%)" } : { transform: "translateY(150%)" }}>
                    <li><i class="fa-brands fa-facebook fa-2x"></i></li>
                    <li><i class="fa-brands fa-instagram fa-2x"></i></li>
                    <li><i class="fa-brands fa-whatsapp fa-2x"></i></li>
                    <li><i class="fa-brands fa-twitter fa-2x"></i></li>
                </div>




            </div>





        </section>
    )
}
