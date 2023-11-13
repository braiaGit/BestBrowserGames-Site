import './CardOfGames.css'
import { BsArrowBarRight } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import CardGame from './CardGame';
    function CardOfGames() {
    return (
        <>
            <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <CardGame/>
                    <div class="col">
                        <div class="card n bg-warning-subtle shadow">
                            <div class="card-body text-center onCenter">
                                <h5 class="card-title">Ver lista completa de Games</h5>
                                <p class="card-text lh-base ">
                                    Explore os melhores jogos de navegador, veja avaliaçãoes de jogadores e os jogos em alta.
                                </p>
                                <Link to='games' class="btn btn-warning d-inline-flex align-items-center">
                                    Ver todos
                                    <BsArrowBarRight className='ms-2'/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardOfGames;