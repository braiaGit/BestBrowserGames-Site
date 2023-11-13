import './gamesPage.css'
import { VscSend } from 'react-icons/vsc'
import { HiOutlinePlay } from 'react-icons/hi'
const response = await fetch(
    "https://api-best-browser-games.vercel.app/games",
    {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }
);
const data = await response.json();

function GamesPage() {
    const Card = () =>
        data.map((game) => {
            return (
                <div className="col" id={game.category._id}>
                    <div className="card shadow">
                        <img src={game.imageURL} className="card-img-top w-h" alt="imagem ilustrativa do jogo" />
                        <a href={game.videoURL} className='text-decoration-none text-light videoButton'><HiOutlinePlay/><br/><div><small className='text-bg-dark rounded'>ver trailer</small></div></a>
                        <div className="card-body">
                            <h5 className="card-title">{game.name}</h5>
                            <p className="card-text">{game.description}</p>
                            <div className="btn-group cardButtons">
                                <a href={game.url} target='blank' className="btn btn-outline-warning fs-5">Jogar</a>
                                <button type="button" className="btn btn-outline-dark fs-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Comentarios
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {Card()}
            </div>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen-sm-down">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title fs-5" id="exampleModalLabel">Modal title</h2>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body row">
                            <p class="col order-1 text-truncate rounded p-2 bgray w-87">
                            <span className='fs-13'>Nome do usuario</span><br/>
                            Jogo show Jogo por horasJogo show Jogo por horasJogo show Jogo por horasJogo show Jogo por horasJogo show Jogo por horasJogo show Jogo por horasJogo show Jogo por horasJogo show Jogo por horasJogo show Jogo por horasJogo show Jogo por horasJogo show Jogo 
                            </p>
                        </div>
                        <div className="modal-footer d-inline-flex">
                            <input type="text" className="form-control w-87" maxLength={255} id="commentInput" placeholder="Comentar..." />
                            <button type="button" className="btn btn-primary"><VscSend /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default GamesPage;