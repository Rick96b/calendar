import { configureStore } from "@reduxjs/toolkit";
import { tasksModel } from "entities/task";

export const store = configureStore({
  reducer: {
    tasks: tasksModel.reducer
  },
});