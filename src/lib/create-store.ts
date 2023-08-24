import { AnyAction, combineReducers, configureStore, ThunkDispatch } from '@reduxjs/toolkit';
import timelineReducer from './timeline/slices/timeline.slice';
import { AuthRepository } from '@/lib/auth/model/auth.repository';
import { TimelineRepository } from '@/lib/timeline/model/timeline.repository';

export type Dependencies = {
  authRepository: AuthRepository;
  timelineRepository: TimelineRepository;
};

const rootReducer = combineReducers({
  timeline: timelineReducer
});

export const createStore = (deps: Dependencies) =>
  configureStore({
    reducer: rootReducer,
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
