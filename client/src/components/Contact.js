import React from 'react'
import "./Contact.css"

export default function Contact() {
    return (
        <section id='contact' className='contact bg-light'>
            <div class="container">
                <header>
                    <h1>Contact Us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque at laboriosam error tenetur reiciendis dolorum eos, facilis asperiores sed enim porro, sit eaque voluptate nostrum corporis rem sequi repudiandae in iste libero provident. Harum facere, sunt tempore dolores assumenda blanditiis.</p>
                </header>
                <div class="content">
                    <div class="content-form">
                        <section className='contactSections'>
                            <i class="fa-sharp fa-solid fa-location-dot fa-2x"></i>
                            <h2>Adress</h2>
                            <p>
                                Lorem ipsum dolor sit.<br />
                                Lorem ipsum dolor sit.<br />
                                Lorem, ipsum.
                            </p>
                        </section>

                        <section className='contactSections'>
                            <i class="fa-solid fa-phone fa-2x"></i>
                            <h2>Phone</h2>
                            <p>0500-000-0000</p>

                        </section >

                        <section className='contactSections'>
                            <i class="fa-solid fa-square-envelope fa-2x"></i>
                            <h2>E-mail</h2>
                            <p>indexhtml@gmail.com</p>
                        </section>
                    </div>
                </div>

            </div>

            <div class="form">
                <div class="right">
                    <div class="contact-form">
                        <input type="text" required />
                        <span>Full Name</span>
                    </div>

                    <div class="contact-form">
                        <input type="email" required />
                        <span>E-mail</span>
                    </div>

                    <div class="contact-form">
                        <textarea name="text"></textarea>
                        <span>Write your message..</span>
                    </div>

                    <div class="contact-form">
                        <input type="submit" name="submit" />
                    </div>
                </div>
            </div>

            <div class="media">
                <li><i class="fa-brands fa-facebook fa-2x"></i></li>
                <li><i class="fa-brands fa-instagram fa-2x"></i></li>
                <li><i class="fa-brands fa-whatsapp fa-2x"></i></li>
                <li><i class="fa-brands fa-twitter fa-2x"></i></li>
            </div>

            <div class="empty">

            </div>
        </section>
    )
}
