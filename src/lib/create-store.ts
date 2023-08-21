import { AnyAction, configureStore, ThunkDispatch } from '@reduxjs/toolkit';
import { timelineSlice } from './timeline/slices/timeline.slice';
import { AuthGateway } from '@/lib/auth/model/auth.gateway';
import { TimelineGateway } from '@/lib/timeline/model/timeline.gateway';

export type Dependencies = {
  authGateway: AuthGateway;
  timelineGateway: TimelineGateway;
};

const rootReducer = timelineSlice.reducer;

export const createStore = (deps: Dependencies) =>
  configureStore({
    reducer: timelineSlice.reducer,
    middleware(getDefaultMiddleware) {
      return getDefaultMiddleware({
        thunk: {
          extraArgument: deps
        }
      });
    }
  });

export type AppStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<RootState, Dependencies, AnyAction>;
