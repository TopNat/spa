import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { apiSPA } from '../services/apiSPA';
//import { messagesSlice } from './messagesSlice';

const rootReducer = combineReducers({
    [apiSPA.reducerPath]: apiSPA.reducer,
    //[messagesSlice.name]: messagesSlice.reducer,
});
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSPA.middleware),
});
