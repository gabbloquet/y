import { Timeline } from '@/lib/timeline/model/timeline.model';
import { User } from '@/lib/user/user.model';

export interface TimelineRepository {
  getUserTimeline(user: User): Promise<Timeline>;
}
