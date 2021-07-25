import '../component/Movies.css';
import { Link } from 'react-router-dom';

const Movies = ({ id, image, title, year, genres, summary }) => {
    return (
        <Link
            to={{
                pathname: `/movie/${id}`,
                state: {
                    title,
                },
            }}
        >
            <li className="movie">
                <img className="movieImg" src={image}></img>
                <div className="movieInfo">
                    <h3 className="title">{title}</h3>
                    <div className="year">{year}</div>
                    <div className="genres">{genres}</div>
                    <div className="summary">{summary.slice(0, 180)}</div>
                </div>
            </li>
        </Link>
    );
};

export default Movies;
