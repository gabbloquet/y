import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { router } from './router';
import { Provider } from 'react-redux';
import { createStore, Dependencies } from '@/lib/store';
import { FakeTimelineRepository } from '@/lib/timeline/infra/fake-timeline.repository';
import { FakeAuthRepository } from '@/lib/auth/infra/fake-auth.repository';

const dependencies = {
  timelineRepository: new FakeTimelineRepository(),
  authRepository: new FakeAuthRepository()
} as Dependencies;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={createStore(dependencies)}>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
