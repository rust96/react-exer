import React, { Component } from 'react';
import TaskCreator from '../task-creator';
import './list-row.scss';


const LastTask = (props) => {
  return (
      <span
        className="task_last"
        draggable
        onDragEnter={props.onDragEnter}>
      </span>
  );
}

class ListRow extends Component {

  state = {
    margin: 0,
    marginMode: false,
    editListIdx: null,
    lastTask: false,
    rmTask: null,
    rmList: null,
    addTask: null,
    addList: null
  }

  dragEnd = (obj) => {
    this.setState({ marginMode: false });
    const { rmList, rmTask, addList, addTask } = this.state;
    this.props.dragTask(rmList, rmTask, addList, addTask, this.props.boardId);
  }

  onListDrag = (listIdx) => {
    this.setState({ addList: listIdx })
  }

  dragStart = (idx, listIdx) => {
    this.setState({
      rmTask: idx,
      rmList: listIdx
    }, function () {
      // console.log(this.state)
    })
  }

  dragEnter = (e, idx, listIdx) => {
    console.log(e.currentTarget.offsetHeight)
      this.setState({
        marginMode: true,
        margin: idx,
        lastTask: false,
        editListIdx: listIdx,
        addTask: idx
      }, function () {
        // console.log(this.state.addTask)
      });
  }

  changeDragParams = (prop, value) => {
    let dragObject = { ...this.state.dragObject }
    dragObject[prop] = value;
    this.setState({ dragObject: dragObject },
    function () {
      console.log(this.state.dragObject)
    })
  }

  render () {
   let marginT = 0;
   let marginB = 8;
   const { board: { cells, elements, id }, addTask } = this.props;

    const renderLists = ({ title, elements }, idx, boardId, fn) => {
      return (
        <div key={idx}
          className="list-block"
          onDragEnter={() => this.onListDrag(idx)}>
          <div className="list-block__inner">
            <div className="tasks">
              <p className="list-title">{ title }</p>
              { renderTasks(elements, idx) }
              <LastTask
                onDragEnter={() => { this.setState({
                  lastTask: true,
                  addTask: elements.length}) }} />
            </div>
            <TaskCreator
              boardId={boardId}
              listIdx={idx}
              addTask={fn} />
          </div>
        </div>
      );
    };

    const renderTasks = (tasks, listIdx) => {
      const dragOver = (e) => {
        this.setState({ marginMode: true })
        e.preventDefault();
        e.stopPropagation();
      }

      return tasks.map((task, idx) => {
        if (this.state.margin === idx && this.state.marginMode === true && listIdx === this.state.editListIdx && !this.state.lastTask) {
            marginT = 60;
            marginB = 8;
        } else if (this.state.lastTask && listIdx === this.state.editListIdx && idx === tasks.length - 1 && this.state.marginMode) {
          marginT = 0;
          marginB = 50;
        } else if (!this.state.marginMode) {
          marginT = 0;
          marginB = 8;
        } else {
          marginT = 0;
          marginB = 8;
        }

        return (
          <React.Fragment key={idx}>
            <div
              style={{marginTop:marginT + 'px', marginBottom:marginB + 'px'}}
              className="task"
              draggable
              onDragStart={() => this.dragStart(idx, listIdx)}
              onDragEnter={(e) => this.dragEnter(e, idx, listIdx)}
              onDragEnd={() => this.dragEnd(this.state.dragObject)}
              onDrop={(e) => this.setState({ marginMode: false }) }>
                <p className="task__item">{ task }</p>
            </div>
          </React.Fragment>
        )
      })
    };

    return (
      <div className="flex">
        { cells.map((c, idx) => renderLists(c, idx, id, addTask)) }
      </div>
    )
  }
}

export default ListRow;
