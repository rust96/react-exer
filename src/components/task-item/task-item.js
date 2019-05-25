import React, {Component} from 'react';

class TaskItem extends Component {
  render () {
    const {
      listIdx, idx, elements, dragStart,
       dragEnter, dragEnd, currentDragIdx,
       dragMode, marginHeight, addList,
        lastTask, task } = this.props;

    let marginT = 0;
    let marginB = 8;

    if (dragMode && listIdx === addList) {
      if (currentDragIdx === idx && !lastTask) {
          marginT = marginHeight;
      } else if (idx === elements.length - 1 && lastTask) {
        marginB = marginHeight;
      }
    }

    const dragStyle = {
      marginTop:marginT + 'px',
      marginBottom:marginB + 'px'
    }

    return (
      <React.Fragment key={idx}>
        <div
          style={dragStyle}
          className="task"
          draggable
          onDragStart={(e) => dragStart(e, idx, listIdx)}
          onDragEnter={(e) => dragEnter(e, idx, listIdx)}
          onDragEnd={() => dragEnd()}>
            <p className="task__item">{ task }</p>
        </div>
      </React.Fragment>
    )
  }
}

export default TaskItem;
