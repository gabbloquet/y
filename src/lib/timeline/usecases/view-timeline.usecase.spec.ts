import { Timeline } from '../model/timeline.model';
import { viewTimeline } from './view-timeline.usecase';
import { FakeTimelineRepository } from '../infra/fake-timeline.repository';
import { FakeAuthRepository } from '@/lib/auth/infra/fake-auth.repository';
import { createStore } from '@/lib/store';
import { selectTimeline, selectIsTimelineLoading } from '@/lib/timeline/slices/timeline.slice';
import { User } from '@/lib/user/user.model';

describe("Feature: View authenticated user's timeline usecase", () => {
  it('Example: Alice is authenticated and see her timeline', async () => {
    // Given
    givenAuthenticatedUser('Alice');
    givenExistingTimeline('Alice', {
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

  it('Example: Alice timeline is fetching', async () => {
    // Given
    givenAuthenticatedUser('Alice');
    givenExistingTimeline('Alice', {
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
    const getTimelinePromise = whenAuthenticatedUserViewHisTimeline();

    // Then
    thenTheTimelineShouldBeLoading();
    await getTimelinePromise;
  });
});

const authRepository = new FakeAuthRepository();
const timelineRepository = new FakeTimelineRepository();
const store = createStore({
  authRepository,
  timelineRepository
});

const givenAuthenticatedUser = (firstname: string) => {
  authRepository.authenticatedUser = User.of(firstname);
};
const givenExistingTimeline = (firstname: string, timeline: Timeline) => {
  timelineRepository.timelineByUser.set(firstname, timeline);
};

const whenAuthenticatedUserViewHisTimeline = async () => {
  return store.dispatch(viewTimeline());
};

const thenTheTimelineShouldBeLoading = () => {
  const isUserTimelineLoading = selectIsTimelineLoading(store.getState());
  expect(isUserTimelineLoading).toBe(true);
};
const thenTheReceivedTimelineShouldBe = (expectedTimeline: Timeline) => {
  const authUserTimeline = selectTimeline(store.getState());
  expect(authUserTimeline).toStrictEqual(expectedTimeline);
};
