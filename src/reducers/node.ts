import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Node } from '../types/Node';
import { RootState } from '../store/configureStore';

const initialState = () => ({
  data: {},
  loading: false,
});

export const getNowPlaying = createAsyncThunk(
  'node/getNowPlaying',
  async (page: string) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?page=${page}&api_key=5d34d9d23f930581162aeff03ad62f10`
    );
    const data = await response.json();
    return data;
  }
);

export const getPopularMovie = createAsyncThunk(
  'node/getPopularMovie',
  async (page: string) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=5d34d9d23f930581162aeff03ad62f10`
    );
    const data = await response.json();
    return data;
  }
);

export const getTrandingMovie = createAsyncThunk(
  'node/getTrandingMovie',
  async (page: string) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?page=${page}&api_key=5d34d9d23f930581162aeff03ad62f10`
    );
    const data = await response.json();
    return data;
  }
);

export const getMoviebyQuery = createAsyncThunk(
  'node/getMoviebyQuery',
  async ( query: string) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&page=1&api_key=5d34d9d23f930581162aeff03ad62f10`
    );
    const data = await response.json();
    return data;
  }
);

const nodeSlice = createSlice({
  name: 'node',
  initialState: initialState() as Node,
  reducers: {},
  extraReducers: (builder) => {
    //get now playing
    builder.addCase(getNowPlaying.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getNowPlaying.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getNowPlaying.rejected, (state) => {
      state.loading = false;
    });

    //get popular movie
    builder.addCase(getPopularMovie.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPopularMovie.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getPopularMovie.rejected, (state) => {
      state.loading = false;
    });

    // get movie tranding
    builder.addCase(getTrandingMovie.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTrandingMovie.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getTrandingMovie.rejected, (state) => {
      state.loading = false;
    });

    // get movie by query
    builder.addCase(getMoviebyQuery.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMoviebyQuery.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getMoviebyQuery.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const selectNode = (state: RootState) => state.node;
export default nodeSlice.reducer;
