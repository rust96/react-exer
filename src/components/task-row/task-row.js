import React from 'react';
import TaskItem from '../task-item';

const TaskRow = (props) => {
  const renderTasks = props.elements.map((task, idx) => {
      return (
        <TaskItem
          {...props}
          dragStart={props.dragStart}
          dragEnter={props.dragEnter}
          dragEnd={props.dragEnd}
          task={task}
          idx={idx}
          key={idx}
        />
      );
    });

    return renderTasks
}

export default TaskRow;
