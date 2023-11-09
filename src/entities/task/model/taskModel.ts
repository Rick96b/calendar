import { createSlice } from "@reduxjs/toolkit";

export type Task = {
    id: string;
    text: string;
    date: Date;
    isCompleted: boolean;
}

const initialState = {
    tasks: {}
}

export const taskModel = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        
    },
})

export const {} = taskModel.actions;

export const reducer = taskModel.reducer