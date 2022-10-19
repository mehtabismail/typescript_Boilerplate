import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import CounterSlice from './reducers/counter/CounterSlice';
import {AuthenticationApi} from './services/authentication/Authentication';
import Loading from './reducers/loading/Loading';
import {PortfolioSummaryApi} from './services/dashboard/PortfolioSummary';
import PortfolioSummarySlice from './reducers/dashboard/PortfolioSummarySlice';
import RecommendationSlice from './reducers/dashboard/RecommendationSlice';

export const store = configureStore({
  reducer: {
    // ALL REDUCERS
    counter: CounterSlice,
    loading: Loading,
    portfolioDashboard: PortfolioSummarySlice,
    recommendationsDashboard: RecommendationSlice,

    // API SERVICES
    [AuthenticationApi.reducerPath]: AuthenticationApi.reducer,
    [PortfolioSummaryApi.reducerPath]: PortfolioSummaryApi.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      AuthenticationApi.middleware,
      PortfolioSummaryApi.middleware,
    ),
});
// export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
