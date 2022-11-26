import React from 'react'
import "./Contact.css"

export default function Contact() {
    return (
        <section id='contact' className='contact'>
            <div class="contact--container">
                <header>
                    <h1>Biz Kimiz</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque at laboriosam error tenetur reiciendis dolorum eos, facilis asperiores sed enim porro, sit eaque voluptate nostrum corporis rem sequi repudiandae in iste libero provident. Harum facere, sunt tempore dolores assumenda blanditiis.</p>
                </header>


                <div class="content-form">
                    <div className='contactSections'>
                        <i class="fa-sharp fa-solid fa-location-dot fa-2x"></i>
                        <h2>Adress</h2>
                        <p>
                            Lorem ipsum dolor sit.<br />
                            Lorem ipsum dolor sit.<br />
                            Lorem, ipsum.
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

                <form class="form">
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

                    <div class="media">
                        <li><i class="fa-brands fa-facebook fa-2x"></i></li>
                        <li><i class="fa-brands fa-instagram fa-2x"></i></li>
                        <li><i class="fa-brands fa-whatsapp fa-2x"></i></li>
                        <li><i class="fa-brands fa-twitter fa-2x"></i></li>
                    </div>

                </form>





            </div>





        </section>
    )
}
