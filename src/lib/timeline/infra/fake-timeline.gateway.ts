import { GetUserTimelineResponse, TimelineGateway } from '../model/timeline.gateway';
import { Timeline } from '../model/timeline.model';

export class FakeTimelineGateway implements TimelineGateway {
  timelineByUser!: Map<string, Timeline>;

  constructor() {
    this.timelineByUser = new Map<string, Timeline>();
  }

  getUserTimeline({ userId }: { userId: string }): Promise<GetUserTimelineResponse> {
    const timeline = this.timelineByUser.get(userId);
    if (!timeline) return Promise.reject();

    return Promise.resolve({
      timeline
    });
  }
}
