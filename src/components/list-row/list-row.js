import React, { Component } from 'react';
import TaskCreator from '../task-creator';
import './list-row.scss';


class ListRow extends Component {

  state = {
    margin: 0,
    marginMode: false,
    editListIdx: null
  }

  render () {
   let marginT = 0;
   let marginB = 8;
   const { board: { cells, elements, id }, addTask } = this.props;

    const renderLists = ({ title, elements }, idx, boardId, fn) => {
      return (
        <div key={idx} className="list-block">
          <div className="list-block__inner">
            <div className="tasks">
              <p className="list-title">{ title }</p>
              { renderTasks(elements, idx) }
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
      const dragStart = (e, idx) => {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', e.currentTarget);
      }


      const dragEnter = (e, idx, listIdx) => {
        this.setState({ margin: idx });
        this.setState({ editListIdx: listIdx })

        e.preventDefault();
        e.stopPropagation();
      }

      const dragOver = (e) => {
        this.setState({ marginMode: true })
        e.preventDefault();
        e.stopPropagation();
      }

      return tasks.map((task, idx) => {
        if (this.state.margin === idx && this.state.marginMode === true && listIdx === this.state.editListIdx) {
          if (idx === tasks.length - 1) {
            marginB = 50;
            marginT = 50;
          } else {
            marginT = 60;
            marginB = 8;
          }
        } else {
          marginT = 0;
          marginB = 8;
        }
        return (
          <div key={idx} style={{marginTop:marginT + 'px', marginBottom:marginB + 'px'}}
            className="task"
            draggable
            onDragStart={(e) => dragStart(e, idx)}
            onDragEnter={(e) => dragEnter(e, idx, listIdx)}
            onDragOver={(e) => dragOver(e)}
            onDrop={(e) => this.setState({ marginMode: false })}>
              <p className="task__item">{ task }</p>
          </div>
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
