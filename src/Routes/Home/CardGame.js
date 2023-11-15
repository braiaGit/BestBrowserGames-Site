import { Link } from 'react-router-dom';
import './CardOfGames.css'
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
function CardGame() {
    const Card = () =>
    data.map((game, index) => {
        if(index >= 2) return
        return (
            <div className="col">
                <div className="card shadow card-total">
                    <img src={game.imageURL} className="card-img-top w-h" alt="imagem ilustrativa do jogo" />
                    <Link to="games" className='text-decoration-none'>
                        <div className="card-body text-dark">
                            <h5 className="card-title">{game.name}</h5>
                            <p className="card-text text-truncate">{game.description}</p>
                        </div>
                    </Link>
                        <div className="btn-group cardButtons">
                            <a href={game.url} target='blank' className="btn btn-outline-warning fs-5">Jogar</a>
                                <button type="button" className="btn btn-outline-dark fs-5">
                                        <Link className='text-decoration-none text-dark' to='games'>Comentarios</Link>
                                </button>
                        </div>
                </div>
            </div>
        )
    })
    return (
        <>
            <Card/>
        </>
    )
}

export default CardGame;