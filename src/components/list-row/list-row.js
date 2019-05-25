import React, { Component } from 'react';
import TaskCreator from '../task-creator';
import TaskRow from '../task-row';
import LastTask from './last-task';

import './list-row.scss';

class ListRow extends Component {

  state = {
    currentDragIdx: 0,
    dragMode: false,
    marginHeight: 0,
    editListIdx: null,
    lastTask: false,
    rmTask: null,
    rmList: null,
    addTask: null,
    addList: null
  }

  dragStart = (e, idx, listIdx) => {
    this.setState({
      rmTask: idx,
      rmList: listIdx,
      marginHeight: e.currentTarget.offsetHeight + 20
    });
  }

  dragEnter = (e, idx, listIdx) => {
      this.setState({
        dragMode: true,
        currentDragIdx: idx,
        lastTask: false,
        editListIdx: listIdx,
        addTask: idx
      });
  }

  onListDrag = (listIdx) => {
    this.setState({ addList: listIdx })
  }

  onLastTaskEnter = (lastTaskIdx) => {
    this.setState({
      lastTask: true,
      addTask: lastTaskIdx
    })
  }
  
  dragEnd = () => {
    const { rmList, rmTask, addList, addTask } = this.state;

    this.setState({ dragMode: false });
    this.props.dragTask(rmList, rmTask, addList, addTask, this.props.boardId);
  }

  render () {
   const { board: { cells, id }, addTask } = this.props;

    const renderLists = ({ title, elements }, idx, boardId, fn) => {
      return (
        <div key={idx}
          className="list-block"
          onDragEnter={() => this.onListDrag(idx)}>
          <div className="list-block__inner">
            <div className="tasks">
              <p className="list-title">{ title }</p>
              <TaskRow
                elements={elements}
                listIdx={idx}
                dragStart={this.dragStart}
                dragEnter={this.dragEnter}
                dragEnd={this.dragEnd}
                {...this.state}
              />
              <LastTask onDragEnter={() => this.onLastTaskEnter(elements.length) } />
            </div>
            <TaskCreator
              boardId={boardId}
              listIdx={idx}
              addTask={fn} />
          </div>
        </div>
      );
    };

    return (
      <div className="flex">
        { cells.map((c, idx) => renderLists(c, idx, id, addTask)) }
      </div>
    )
  }
}

export default ListRow;
