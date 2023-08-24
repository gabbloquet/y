import { createSlice } from '@reduxjs/toolkit';
import { Timeline } from '../model/timeline.model';
import { viewTimeline } from '../usecases/view-timeline.usecase';
import { RootState } from '@/lib/create-store';

export type TimelineState = {
  status: 'loading' | 'success' | 'error';
  timeline?: Timeline;
};

export const timelineSlice = createSlice({
  name: 'timeline',
  initialState: {} as TimelineState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(viewTimeline.pending, () => {
        return {
          status: 'loading',
          timeline: undefined
        };
      })
      .addCase(viewTimeline.fulfilled, (_, action) => {
        return {
          status: 'success',
          timeline: action.payload
        };
      });
  }
});

export const selectIsTimelineLoading = (state: RootState) => state.timeline.status === 'loading';

export const selectTimeline = (state: RootState) => state.timeline.timeline;

export default timelineSlice.reducer;
