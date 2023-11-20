import React, { useState } from 'react'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { TextField, Modal, Button, IconButton } from '@mui/material';

import styles from './AddTask.module.scss'
import { addTask } from '../model/addTask';
import { useFormField } from 'shared/hooks/useFormField';

const AddTask = () => {
  const [open, setOpen] = useState(false);
  const dateField = useFormField();
  const timeField = useFormField();
  const textField = useFormField();

  function submitHandler() {
    addTask({
      text: textField.value,
      date: dateField.value,
      time: timeField.value,
      isCompleted: false
    })
  }

  return (
    <>
      <IconButton aria-label="add-task" onClick={() => setOpen(true)}>
        <AddBoxOutlinedIcon className={styles.addTaskIcon}/>
      </IconButton>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        className={styles.addTaskModal}
      >
        <form 
        className={styles.addTaskForm}
        onSubmit={submitHandler}
      >
          <TextField
            id="date"
            label="Birthday"
            type="date"
            className={styles.textField}
            InputLabelProps={{
              shrink: true,
            }}
            {...dateField}
          />
          <TextField
            id="time"
            label="Alarm clock"
            type="time"
            defaultValue="07:30"
            className={styles.textField}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            {...timeField}
          />
          <TextField
            placeholder="Task text..."
            multiline
            className={styles.textInput}
            rows={5}
            maxRows={10}
            {...textField}
          />
          <Button className={styles.addTaskButton} type='submit'>
            ADD TASK
          </Button>
        </form>
      </Modal>
    </>
  )
}

export default AddTask;