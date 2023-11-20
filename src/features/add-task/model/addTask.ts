import dayjs from "dayjs"
import { taskModel } from "entities/task"
import { arrayUnion, doc, updateDoc, getDoc, setDoc } from "firebase/firestore"
import { firestoreDB } from "shared/firebase/config"

export const addTask = async (task: taskModel.Task) => {
    const date = dayjs(task.date)
    const tasksRef = doc(firestoreDB, 'tasks', date.format('YYYY-MM-DD'))
    if((await getDoc(tasksRef)).exists()) {
        await updateDoc(tasksRef, {
            tasks: arrayUnion(task)
        })
    } else {
        setDoc(tasksRef, {
            tasks: [task]
        })
    }
    
}