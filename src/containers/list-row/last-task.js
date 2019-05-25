import React from 'react';

const LastTask = (props) => {
  return (
      <span
        className="task_last"
        draggable
        onDragEnter={props.onDragEnter}>
      </span>
  );
}

export default LastTask;
