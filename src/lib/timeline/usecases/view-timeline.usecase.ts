import { createAppAsyncThunk } from '../../create-app-thunk';

export const viewTimeline = createAppAsyncThunk(
  'timeline/view',
  async (_, { extra: { authGateway, timelineGateway } }) => {
    const authenticatedUser = await authGateway.getAuthUser();
    const { timeline } = await timelineGateway.getUserTimeline({ userId: authenticatedUser });
    return timeline;
  }
);
