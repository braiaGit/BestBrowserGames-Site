import './gamesPage.css'
import { VscSend } from 'react-icons/vsc'
import { HiOutlinePlay } from 'react-icons/hi'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
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

const listNamesOfGames = []
data.map((game) => {
    listNamesOfGames.push(game.name)
})

function GamesPage() {
    const [ratings, setRatings] = useState([])
    const [game, setGame] = useState({});
    const { session, setSession } = useContext(AuthContext);
    const Card = () =>
        data.map((game) => {
            console.log(game._id)
            return (
                <div className="col " id={game.category._id}>
                    <div className="card shadow card-total">
                        <img src={game.imageURL} className="card-img-top w-h" alt="imagem ilustrativa do jogo" />
                        <a href={game.videoURL} target='_blank' className='text-decoration-none text-light videoButton'><HiOutlinePlay /><br /><div><span className='text-bg-dark rounded'>Ver trailer</span></div></a>
                        <div className="card-body" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <h5 className="card-title">{game.name}</h5>
                            <p className="card-text text-truncate">{game.description}</p>
                        </div>
                        <div className="btn-group cardButtons">
                            <a href={game.url} target='blank' className="btn btn-outline-warning fs-5">Jogar</a>
                            <button type="button" className="btn btn-outline-dark fs-5" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { setGame(game) }}>
                                Comentarios
                            </button>
                        </div>
                    </div>
                </div>
            )
        })
    const seeComment = () => {
        const comment = document.getElementById('usersComment');
        comment.classList.toggle('text-truncate')
    }

    const handleSubmit = async (e) => {
        const response = await fetch(
            `https://api-best-browser-games.vercel.app/ratings/${game._id}`,
            {
                method: "PUT",
                headers: {
                    Authorization: session.token,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    score: e.target.score.value,
                    description: e.target.comment.value,
                    game: game._id,
                    user: session.name
                })
            }
        );
        const data = await response.json();
    }
    useEffect(() => {
        if (game._id) {
            fetch(
                `https://api-best-browser-games.vercel.app/games/${game._id}/ratings`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },

                }).then((res) => {
                    res.json().then((data) => {
                        setRatings(data)
                    })
                })
        }
    }, [game])
    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {Card()}
            </div>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen-sm-down modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title fs-5" id="exampleModalLabel">{game.name}</h2>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body col">
                            <p>{game.description}</p>
                            {ratings.map((rating) => {
                                return (
                                    <p class="col order-1 text-truncate rounded p-2 bgray w-87 cp" id='usersComment' onClick={seeComment}>
                                        <span className='fs-13'>{rating.user.name}</span><br />
                                        {rating.description}
                                    </p>
                                )
                            })}
                        </div>
                        <form onSubmit={handleSubmit} className="modal-footer d-inline-flex">
                            <label for="score" class="form-label me-4">Nota de 0 a 5:</label>
                            0<input type="range" className="form-range" max={5} min={1} step={1} name='score' id='score' placeholder="Nota (0 a 5)..." /> 5
                            <input type="text" className="form-control w-input" maxLength={255} name='comment' id="commentInput" placeholder="Comentar..." />
                            <button type="submit" disabled={session.token?false:true} className="btn btn-warning"><VscSend /></button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default GamesPage;
export { listNamesOfGames };