import './gamesPage.css'
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
                <div className="col">
                    <div className="card shadow">
                        <img src={game.imageURL} className="card-img-top w-h" alt="imagem ilustrativa do jogo" />
                        <div className="card-body">
                            <h5 className="card-title">{game.name}</h5>
                            <p className="card-text">{game.description}</p>
                            <div className="btn-group cardButtons">
                                <a href={game.url} target='blank' className="btn btn-outline-warning fs-5">Jogar</a>
                                <button type="button" className="btn btn-outline-dark fs-5">Comentarios</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    return (
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {Card()}
            </div>
    )
}
export default GamesPage;