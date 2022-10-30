import "./header.css";
import $ from 'jquery';

function Header() {

    $(document).ready(function () {
        $(window).scroll(function () {
            if (this.scrollY > 20) {
                $(".header-navbar").addClass("sticky");
            } else {
                $(".header-navbar").removeClass("sticky");
            }
            /*    if (this.scrollY > 500) {
                   $(".scroll-up-btn").addClass("show");
               }
               else {
                   $(".scroll-up-btn").removeClass("show");
               } */
        });

        //slide-up script
        /*      $(".scroll-up-btn").click(function () {
                 $("html").animate({ scrollTop: 0 });
             });
      */
    });


    return (
        <nav className="header-navbar">
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
                <i class="fa-solid fa-bars"></i>
            </label>

            <a className='logo' href="/">CAkademi</a>
            <ul>
                <li><a href="/#lessons">Eğitimlerimiz</a></li>
                <li><a href="/#about">Biz kimiz</a></li>
                <li><a href="">Galeri</a></li>
                <li><a href="/#contact">İletişim</a></li>
                <li><button onClick={() => { window.location.pathname = "/signin" }} className="btn btn-outline-light">Giriş Yap</button></li>

            </ul>
        </nav>
    );
}

export default Header;