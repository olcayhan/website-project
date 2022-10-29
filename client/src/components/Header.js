import "./header.css";


function Header() {

    return (
        <nav>
            <input type="checkbox" id="check" />
            <label for="check" class="checkbtn">
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