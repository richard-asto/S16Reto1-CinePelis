// components/MovieGrid.jsx
import { pelis } from '../data/pelis';
import MovieCard from './MovieCard';

const MovieGrid = () => {
    return (
        <section className="movie-grid header">
            {pelis.map((peli) => (
                <MovieCard key={peli.id} {...peli} />
            ))}
        </section>
    );
};

export default MovieGrid;
