import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
        state.messages.unshift(action.payload);
        state.messages = state.messages.slice(0, 10);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
