// components/MovieCard.jsx
const MovieCard = ({ img, titulo, genero, descripcion }) => {
    return (
        <div className="movie-card">
            <img src={img} alt={titulo} />
            <div className="movie-info">
                <h3>{titulo}</h3>
                <span>{genero}</span>
                <p>{descripcion}</p>
            </div>
        </div>
    );
};

export default MovieCard;