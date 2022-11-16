import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MoviesDetail from './pages/MovieDetail';
import MoviesList from './pages/MoviesList';
import PopularMovie from './pages/PopularMovie';
import TrandingMovie from './pages/TrandingMovie';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/movies-list' />} />
        <Route path='/movies-list' element={<MoviesList />} />
        <Route path='/movies-list/page=:page' element={<MoviesList />} />
        <Route path='/movies-popular' element={<PopularMovie />} />
        <Route path='/movies-popular/page=:page' element={<PopularMovie />} />
        <Route path='/movies-tranding' element={<TrandingMovie />} />
        <Route path='/movies-tranding/page=:page' element={<TrandingMovie />} />
        <Route path='/movies-detail/:id' element={<MoviesDetail />} />
        <Route path='/*' element={<p>Page no found.</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
