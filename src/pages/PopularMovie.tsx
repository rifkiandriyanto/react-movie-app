import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import PagNav from '../components/shared/pagination/PagNav';
import NavBar from '../components/shared/nav/NavBar';
import { getPopularMovie, selectNode, getMoviebyQuery } from '../reducers/node';
import { useAppDispatch, useAppSelector } from '../store/configureStore';
import { useNavigate } from 'react-router-dom';

const PopularMovie = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const node = useAppSelector(selectNode);

  useEffect(() => {
    const page = params.page ?? '1';
    dispatch(getPopularMovie(page));
  }, [dispatch, params.page]);

  const handleSearchMovie = (query: string) => {
    dispatch(getMoviebyQuery(query));
  };

  const pageHandler = (page: string) => {
    console.log('pageHandler', page);
    // setPageSelected(page);
    navigate(`/movies-list/page=${page}`, { replace: true });
  };

  if (node.loading) return <p>Loading...</p>;

  return (
    <React.Fragment>
      <NavBar handleSearch={handleSearchMovie} />
      <section>
        <div className='row m-3'>
          {node.data.results?.map((result) => (
            <div className='col-lg-2 col-md-4 mb-3 text-center'>
              <Link
                to={'/movies-detail/' + result.id.toString()}
                key={result.id}
              >
                <img
                  src={'https://image.tmdb.org/t/p/w500/' + result.poster_path}
                  alt={result.title}
                  width={175}
                  height={255}
                  className='border p-2 shadow-sm'
                />
              </Link>
            </div>
          ))}
        </div>
      </section>
      <PagNav
        page={node.data.page}
        totalPages={node.data.total_pages}
        onPage={pageHandler}
      />
    </React.Fragment>
  );
};

export default PopularMovie;
