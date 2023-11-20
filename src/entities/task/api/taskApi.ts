import { getDoc, doc } from 'firebase/firestore';
import dayjs from "dayjs"
import { firestoreDB } from 'shared/firebase/config';
import { Task } from '../model/taskModel';

export const fetchTaskByDate = async (date: Date) => {
    return (await getDoc(doc(firestoreDB, 'tasks', dayjs(date).format('YYYY-MM-DD')))).data() as Task
}