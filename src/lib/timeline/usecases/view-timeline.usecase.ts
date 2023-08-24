import { createAppAsyncThunk } from '@/lib/create-app-thunk';

export const viewTimeline = createAppAsyncThunk(
  'timeline/view',
  async (_, { extra: { authRepository, timelineRepository } }) => {
    const authenticatedUser = await authRepository.getAuthenticatedUser();
    return await timelineRepository.getUserTimeline(authenticatedUser);
  }
);
