import { AnyAction, combineReducers, configureStore, ThunkDispatch } from '@reduxjs/toolkit';
import timelineReducer from './timeline/slices/timeline.slice';
import { AuthRepository } from '@/lib/auth/model/auth.repository';
import { TimelineRepository } from '@/lib/timeline/model/timeline.repository';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { FakeAuthRepository } from '@/lib/auth/infra/fake-auth.repository';
import { FakeTimelineRepository } from '@/lib/timeline/infra/fake-timeline.repository';
import { MemoryRouter } from 'react-router-dom';

export type Dependencies = {
  authRepository: AuthRepository;
  timelineRepository: TimelineRepository;
};

const FAKE_DEPENDENCIES: Dependencies = {
  authRepository: new FakeAuthRepository(),
  timelineRepository: new FakeTimelineRepository()
};

const rootReducer = combineReducers({
  timeline: timelineReducer
});

export const createStore = (deps: Dependencies, preloadedState = {}) =>
  configureStore({
    reducer: rootReducer,
    middleware(getDefaultMiddleware) {
      return getDefaultMiddleware({
        thunk: {
          extraArgument: deps
        }
      });
    },
    preloadedState
  });

export const renderWithState = (
  component: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = createStore(FAKE_DEPENDENCIES, preloadedState),
    ...renderOptions
  }
) => {
  const Wrapper = ({ children }: PropsWithChildren): React.ReactElement => {
    return (
      <MemoryRouter>
        <Provider store={store}>{children}</Provider>
      </MemoryRouter>
    );
  };

  return { store, ...render(component, { wrapper: Wrapper, ...renderOptions }) };
};

export type AppStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<RootState, Dependencies, AnyAction>;
