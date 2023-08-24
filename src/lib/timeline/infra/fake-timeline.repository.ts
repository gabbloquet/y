import { TimelineRepository } from '../model/timeline.repository';
import { Timeline } from '../model/timeline.model';
import { User } from '@/lib/user/user.model';

export class FakeTimelineRepository implements TimelineRepository {
  timelineByUser!: Map<string, Timeline>;

  constructor() {
    this.timelineByUser = new Map<string, Timeline>();
  }

  getUserTimeline(user: User): Promise<Timeline> {
    const timeline = this.timelineByUser.get(user.getFirstname());
    if (!timeline) return Promise.reject();
    return Promise.resolve(timeline);
  }
}
