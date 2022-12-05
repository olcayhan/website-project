import "../styles/header.css";
import $ from 'jquery';

function Header() {

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
        <nav className="header-navbar" >
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
                <i class="fa-solid fa-bars"></i>
            </label>

            <a className='logo' href="/">CAkademi</a>
            <ul>
                <li><button onClick={() => { window.location.pathname = "/signin" }} className="btn btn-outline-light">Çıkış Yap</button></li>

            </ul>
        </nav >
    );
}

export default Header;