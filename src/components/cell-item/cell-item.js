import React from 'react';

const CellItem = ({ cell }) => {
  return (
    <div className="cell">
      <p>{ cell }</p>
    </div>
  )
}

export default CellItem;
