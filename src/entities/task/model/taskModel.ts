export type Task = {
    id?: string;
    text: string;
    date: string;
    time: string;
    isCompleted: boolean;
}

export type Tasks = Record<string, Task[]>

