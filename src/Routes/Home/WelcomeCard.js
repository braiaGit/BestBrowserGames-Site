import { Link } from 'react-router-dom';
import './welcomeCard.css'
function WelcomeCard(){
    return(
        <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary cardCom">
    <div class="col-md-6 p-lg-5 mx-auto my-5">
      <h1 class="display-3 fw-bold">Bem vindo a <p className="text-warning tx">Best Browser Games</p></h1>
      <h3 class="fw-normal text-muted mb-3 lh-base">Encontre os melhores jogos de navegador aqui.
      Com avaliaçãoes e opiniões de outros jogadores</h3>
      <div class="d-flex gap-3 justify-content-center lead fw-normal">
        <Link class="icon-link text-decoration-none" to='about'>
          Sobre
        </Link>
      </div>
    </div>
    <div class="product-device shadow-sm d-none d-md-block"></div>
    <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>
    )
};

export default WelcomeCard;