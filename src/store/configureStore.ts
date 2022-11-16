import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import node from '../reducers/node';
import movie from '../reducers/movie';

const store = configureStore({ reducer: { node: node, movie: movie } });

// If you pass the reducers directly to configureStore()
// and do not define the root reducer explicitly, there is no reference to rootReducer.
// Instead, you can refer to store.getState, in order to get the State type.
export type RootState = ReturnType<typeof store.getState>;

// If you want to get the Dispatch type from your store, you can extract it after creating the store.
// It is recommended to give the type a different name like AppDispatch to prevent confusion,
// as the type name Dispatch is usually overused. You may also find it to be more convenient to export
// a hook like useAppDispatch shown below, then using it wherever you'd call useDispatch.
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
