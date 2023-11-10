import { Link } from "react-router-dom";
function Footer() {
    return (
        <footer class="py-3 my-4 mt-5">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                <li class="nav-item"><Link to="/" class="nav-link px-2 text-body-secondary">Início</Link></li>
                <li class="nav-item"><Link to="about" class="nav-link px-2 text-body-secondary">Sobre</Link></li>
            </ul>
            <p class="text-center text-body-secondary">© 2023 Company, Inc</p>
        </footer>
    )
}
export default Footer;