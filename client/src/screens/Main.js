import React from 'react'
import Lessons from "../components/Lessons"
import About from "../components/AboutSection"
import Contact from '../components/Contact'

import $ from 'jquery';


export default function Main() {
    $(document).ready(function () {
        $(window).scroll(function () {

            if (this.scrollY > 500) {
                $(".scroll-up-btn").addClass("show");
            }
            else {
                $(".scroll-up-btn").removeClass("show");
            }
        });
        $(".scroll-up-btn").click(function () {
            $("html").animate({ scrollTop: 0 });
        });

    });
    return (
        <div>

            <Lessons />
            <About />
            <Contact />

            <div className='scroll-up-btn'>
                <i class="fas fa-angle-up"></i>
            </div>

        </div>
    )
}
