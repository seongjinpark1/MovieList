import { useEffect, useState } from 'react';
import axios from 'axios';
import Movies from '../component/Movies';
import '../component/Movies.css';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [isLoding, setIsLoding] = useState(true);

    useEffect(async () => {
        const {
            data: {
                data: { movies },
            },
        } = await axios.get('https://yts-proxy.nomadcoders1.now.sh/list_movies.json');
        setMovies(movies);
        setIsLoding(false);
    }, []);

    return (
        <section>
            {isLoding ? (
                <div className="loading">Loading...</div>
            ) : (
                <ul className="movie_container">
                    {movies.map(movie => {
                        return (
                            <Movies
                                id={movie.id}
                                key={movie.id}
                                image={movie.medium_cover_image}
                                title={movie.title}
                                year={movie.year}
                                genres={movie.genres}
                                summary={movie.summary}
                            />
                        );
                    })}
                </ul>
            )}
        </section>
    );
};

export default Home;
