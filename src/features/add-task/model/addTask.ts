import dayjs from "dayjs"
import { taskModel } from "entities/task"
import { doc, setDoc } from "firebase/firestore"
import { firestoreDB } from "shared/firebase/config"

export const addTask = (task: taskModel.Task) => {
    const date = dayjs(task.date)
    setDoc(doc(firestoreDB, 'tasks', date.format('YYYY/MM/DD')), task)
}