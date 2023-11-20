import { getDoc, doc } from 'firebase/firestore';
import { firestoreDB } from 'shared/firebase/config';
import { Tasks } from '../model/taskModel';

export const fetchTasksByDate = async (date: string) => {
    return {[date]: (await getDoc(doc(firestoreDB, 'tasks', date))).data()?.tasks || []} as Tasks
}