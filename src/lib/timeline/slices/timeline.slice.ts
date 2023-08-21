import { createSlice } from '@reduxjs/toolkit';
import { Message } from '../model/timeline.model';
import { viewTimeline } from '../usecases/view-timeline.usecase';

export type TimelineState = {
  user: string;
  messages: Message[];
};

export const timelineSlice = createSlice({
  name: 'timeline',
  initialState: {},
  reducers: {},
  extraReducers(builder) {
    builder.addCase(viewTimeline.fulfilled, (_, action) => {
      return action.payload;
    });
  }
});
