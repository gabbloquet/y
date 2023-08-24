import { TimelineDivider } from '@/components/TimelineDivider';
import { useSelector } from 'react-redux';
import { selectTimeline } from '@/lib/timeline/slices/timeline.slice';
import { Timeline } from '@/lib/timeline/model/timeline.model';

// const fakeMessages: PropsOf<typeof PostList>['messages'] = [
//   {
//     id: 'msg1',
//     userId: 'user1',
//     username: 'Alice',
//     profilePictureUrl: 'https://picsum.photos/200?random=user1',
//     publishedAt: '5 minutes ago',
//     text: "Hi everyone ! I'm Alice and I have also many things to say !"
//   },
//   {
//     id: 'msg2',
//     userId: 'user2',
//     username: 'Bob',
//     profilePictureUrl: 'https://picsum.photos/200?random=user2',
//     publishedAt: '17 minutes ago',
//     text: "Hey there ! I'm Bob and I have many things to say hehe !"
//   },
//   {
//     id: 'msg3',
//     userId: 'user3',
//     username: 'Charles',
//     profilePictureUrl: 'https://picsum.photos/200?random=user3',
//     publishedAt: '1 hour ago',
//     text: "What's up here ?"
//   }
// ];

export const Home = () => {
  const timeline = useSelector(selectTimeline);

  return (
    <>
      <TimelineDivider text={getDividerMessage(timeline)} />
      {timeline &&
        timeline.messages &&
        timeline.messages.map((message) => <p key={message.publishedAt}>{message.text}</p>)}
    </>
  );
};

const getDividerMessage = (timeline?: Timeline) => {
  return timeline && timeline.messages
    ? 'Message(s) pour vous'
    : "Il n'y a pas de message pour vous";
};
