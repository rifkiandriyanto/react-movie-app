import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetail, getCredits, selectMovie } from "../reducers/movie";
import { useAppDispatch, useAppSelector } from "../store/configureStore";

import "./MovieDetail.css";

const MoviesDetail = () => {
  const dispatch = useAppDispatch();
  const movie = useAppSelector(selectMovie);
  const params = useParams();
  const release = new Date(movie.detail.release_date).getFullYear();
  const genres = movie.detail.genres?.map((genre) => genre.name).join(", ");
  const screenplayer = movie.screenplayers
    .map((screenplayer) => screenplayer)
    .join(", ");
  console.log(screenplayer);

  useEffect(() => {
    dispatch(getDetail(params.id!));
    dispatch(getCredits(params.id!));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (movie.loading) return <p>Loading...</p>;

  return (
    <section className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="p-5 border shadow-sm">
        <div className="row">
          <div className="col-4">
            <img
              src={
                movie.detail.poster_path
                  ? "https://image.tmdb.org/t/p/w500/" +
                    movie.detail.poster_path
                  : ""
              }
              alt={movie.detail.title}
              width={250}
            />
          </div>
          <div className="col-8">
            <h1 className="text-uppercase fw-bold">{movie.detail.title}</h1>
            <h3 className="text-uppercase fst-italic fw-light">
              {movie.detail.tagline}
            </h3>
            <div>
              <h4>Synopsis</h4>
              <p>{movie.detail.overview}</p>
            </div>
            <p>
              <b>Release</b>:&nbsp;{release}
            </p>
            <p>
              <b>Genre</b>:&nbsp;{genres}
            </p>
            <p>
              <b>Runtime</b>:&nbsp;{movie.detail.runtime} minutes
            </p>
            <p>
              <b>Director</b>:&nbsp;
              {movie.directors.map((director) => director)}
            </p>
            <p>
              <b>Writter</b>:&nbsp;{screenplayer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoviesDetail;
