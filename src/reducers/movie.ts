import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/configureStore';
import { Crew } from '../types/Crew';
import { Movie } from '../types/Movie';

const initialState = () => ({
  detail: {},
  directors: [''],
  screenplayers: [''],
  loading: false,
});

export const getDetail = createAsyncThunk(
  'movie/getDetail',
  async (id: string) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=5d34d9d23f930581162aeff03ad62f10&language=en-US`
    );

    const data = await response.json();

    return data;
  }
);

export const getCredits = createAsyncThunk(
  'movie/getCredits',
  async (id: string) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=5d34d9d23f930581162aeff03ad62f10`
    );

    const data = await response.json();

    return data;
  }
);

const movieSlice = createSlice({
  name: 'movie',
  initialState: initialState() as Movie,
  reducers: {},
  extraReducers: (builder) => {
    //get detail
    builder.addCase(getDetail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getDetail.fulfilled, (state, action) => {
      state.detail = action.payload;
      state.loading = false;
    });
    builder.addCase(getDetail.rejected, (state) => {
      state.loading = false;
    });

    //get credit
    builder.addCase(getCredits.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCredits.fulfilled, (state, action) => {
      let filterByDirector: Array<string> = [];

      action.payload.crew.forEach((e: Crew) => {
        if (e.job === 'Director') {
          filterByDirector.push(e.name);
        }
      });

      let filterByScreenplayer: Array<string> = [];

      action.payload.crew.forEach((e: Crew) => {
        if (e.job === 'Screenplay' || e.job === 'Writer') {
          filterByScreenplayer.push(e.name);
        }
      });

      state.directors = filterByDirector;
      state.screenplayers = filterByScreenplayer;
      state.loading = false;
    });
    builder.addCase(getCredits.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const selectMovie = (state: RootState) => state.movie;
export default movieSlice.reducer;
