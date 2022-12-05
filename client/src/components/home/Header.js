import "../styles/header.css";
import $ from 'jquery';
import { useInView } from 'react-intersection-observer';

function Header() {

    const { ref: firstRef, inView: firstView } = useInView(
        {
            triggerOnce: true
        }
    );

    $(document).ready(function () {
        $(window).scroll(function () {
            if (this.scrollY > 20) {
                $(".header-navbar").addClass("sticky");
            } else {
                $(".header-navbar").removeClass("sticky");
            }
        });
    });


    return (
        <nav className="header-navbar" ref={firstRef} >
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
                <i class="fa-solid fa-bars"></i>
            </label>

            <a className='logo' href="/" style={firstView ? { transform: "translate(15%)" } : { transform: "translate(-50%)" }}>CAkademi</a>
            <ul style={firstView ? { transform: "translate(-15%)" } : { transform: "translate(50%)" }}>
                <li><a href="/#lessons">EĞİTİMLERİMİZ</a></li>
                <li><a href="/#about">BİZ KİMİZ</a></li>
                <li><a href="/galery">GALERİ</a></li>
                <li><a href="/#contact">İLETİŞİM</a></li>
                <li><button onClick={() => { window.location.pathname = "/signin" }} className="btn btn-outline-light">Giriş Yap</button></li>

            </ul>
        </nav>
    );
}

export default Header;