import { Timeline } from '../model/timeline.model';
import { viewTimeline } from './view-timeline.usecase';
import { FakeTimelineGateway } from '../infra/fake-timeline.gateway';
import { FakeAuthGateway } from '@/lib/auth/infra/fake-auth.gateway';
import { createStore } from '@/lib/create-store';

describe("Feature: View authenticated user's timeline usecase", () => {
  it('Example: Alice is authenticated and see her timeline', async () => {
    // Given
    givenAuthenticatedUser('Alice');
    givenExistingTimeline({
      user: 'Alice',
      messages: [
        {
          text: "Hello it's Bob !!",
          author: 'Bob',
          publishedAt: '2023-05-16T12:02:00.000Z'
        },
        {
          text: "Hello it's Alice",
          author: 'Alice',
          publishedAt: '2023-05-16T12:06:00.000Z'
        }
      ]
    });

    // When
    await whenAuthenticatedUserViewHisTimeline();

    // Then
    thenTheReceivedTimelineShouldBe({
      user: 'Alice',
      messages: [
        {
          text: "Hello it's Bob !!",
          author: 'Bob',
          publishedAt: '2023-05-16T12:02:00.000Z'
        },
        {
          text: "Hello it's Alice",
          author: 'Alice',
          publishedAt: '2023-05-16T12:06:00.000Z'
        }
      ]
    });
  });
});

const authGateway = new FakeAuthGateway();
const timelineGateway = new FakeTimelineGateway();
const store = createStore({
  authGateway,
  timelineGateway
});

const givenAuthenticatedUser = (userId: string) => {
  authGateway.authUser = userId;
};

const givenExistingTimeline = (timeline: Timeline) => {
  timelineGateway.timelineByUser.set('Alice', timeline);
};

const whenAuthenticatedUserViewHisTimeline = async () => {
  await store.dispatch(viewTimeline());
};
const thenTheReceivedTimelineShouldBe = (expectedTimeline: Timeline) => {
  const authUserTimeline = store.getState();
  expect(authUserTimeline).toStrictEqual(expectedTimeline);
};
