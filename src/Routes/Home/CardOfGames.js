import './CardOfGames.css'
import { BsArrowBarRight } from 'react-icons/bs'
function CardOfGames() {
    return (
        <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card shadow">
                        <img src="https://imgs.search.brave.com/tcZ01i9BJGApoZv7Arjuu8GIHMrNwB1d_gzb_-e0HPY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJpdjJvbmxpbmUu/Y29tL2ZpbGVzL2lt/YWdlcy8xNC8xNGJm/NmY4Y2M1ODQyZGNh/MmFmNGQ4ZDcxNGJi/NjViMi5qcGc" class="card-img-top w-h" alt="imagem ilustrativa do jogo" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="d-flex justify-content-between align-items-center m-3">
                            <div class="btn-group">
                                <button type="button" class="btn btn-outline-info fs-5">Jogar</button>
                                <button type="button" class="btn btn-outline-success fs-5">Comentarios</button>
                            </div>
                            <small class="text-body-secondary fs-6">avaliaçãoes</small>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card shadow">
                        <img src="https://imgs.search.brave.com/tcZ01i9BJGApoZv7Arjuu8GIHMrNwB1d_gzb_-e0HPY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJpdjJvbmxpbmUu/Y29tL2ZpbGVzL2lt/YWdlcy8xNC8xNGJm/NmY4Y2M1ODQyZGNh/MmFmNGQ4ZDcxNGJi/NjViMi5qcGc" class="card-img-top w-h" alt="imagem ilustrativa do jogo" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="d-flex justify-content-between align-items-center m-3">
                            <div class="btn-group">
                                <button type="button" class="btn btn-outline-info fs-5">Jogar</button>
                                <button type="button" class="btn btn-outline-success fs-5">Comentarios</button>
                            </div>
                            <small class="text-body-secondary fs-6">avaliaçãoes</small>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card n bg-info-subtle shadow">
                        <div class="card-body text-center onCenter">
                            <h5 class="card-title">Ver lista completa de Games</h5>
                            <p class="card-text lh-base ">
                                Explore os melhores jogos de navegador, veja avaliaçãoes de jogadores e os jogos em alta.
                            </p>
                            <button class="btn btn-primary d-inline-flex align-items-center" type="button">
                                Ver todos 
                                <BsArrowBarRight className='ms-2'/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardOfGames;