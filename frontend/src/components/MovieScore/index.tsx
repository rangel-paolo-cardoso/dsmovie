import MovieStars from '../MovieStars';
import './styles.css';

export default function index() {
  const score = 3.5;
  const count = 15;
  return (
    <div className="dsmovie-score-container">
      <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
      <MovieStars />
      <p className="dsmovie-score-count">{count} avaliações</p>
    </div>
  );
}
