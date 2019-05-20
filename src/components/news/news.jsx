import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageNotFound from '../page-not-found';
import Header from '../header';
import CellCreator from '../cell-creator';
import ListRow from '../list-row';
import { addListTitle } from '../../actions';

class News extends Component {

  addListTitle = (title, boardId) => {
    this.props.addListTitle(title, boardId)
  }

  render () {
    const id = this.props.match.params.id;

    const currentBoard = this.props.boards.find((b) => {
      return b.id == id;
    })

    if (!currentBoard) {
      return <PageNotFound />
    }

    return (
      <div>
        <Header />
        <h1>Board #{id}</h1>
        <CellCreator
          currentBoardId={id}
          addListTitle={this.props.addListTitle}
          cells={currentBoard.cells}
        />
      <ListRow board={currentBoard} />
      </div>
    )
  }
}

const mapStateToProps = ({ boards }) => {
  return {
    boards
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addListTitle: (title, boardId) => {
      dispatch(addListTitle(title, boardId))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(News);
