import Pagination from '../../components/Pagination';
// import MovieStars from '../../components/MovieStars';
// import MovieScore from '../../components/MovieScore';
import MovieCard from '../../components/MovieCard';
import axios from 'axios';
import { BASE_URL } from 'utils/requests';
import { useState, useEffect } from 'react';
import { MoviePage } from 'types/Movie';

export default function Listing() {

  const [pageNumber, setPageNUmber] = useState(0);

  useEffect(() => {
    axios.get(`${BASE_URL}/movies?size=12&page=1`)
    .then((response) => {
      const data = response.data as MoviePage;
      setPageNUmber(data.number);
      console.log(data);
    })
  }, []);

  return (
    <>
      <p>{pageNumber}</p>
      <Pagination />
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
        </div>
      </div>
    </>
  );
}
