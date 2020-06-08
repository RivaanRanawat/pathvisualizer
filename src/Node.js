import React, {Component} from 'react';

import './Node.css';

export default class Node extends Component {
  render() {
    const {
      col,
      isFinish,
      isStart,
      isWall,
      onMouseDown,
      onMouseEnter,
      onMouseUp,
      row,
    } = this.props;
    const extraClassName = 
    isFinish ? 'node-finish' : isStart ? 'node-start' : isWall ? 'node-wall' : '';

    return (
      <div
        id={`node-${row}-${col}`}
        className={`node ${extraClassName}`}
        onMouseDown={() => onMouseDown(row, col)}
        onMouseEnter={() => onMouseEnter(row, col)}
        onMouseUp={() => onMouseUp()}></div>
    );
  }
}

/*Has booleans to determine the position*/
/*This node has mouse handlers that are used by the user to make the walls that are passed down to the PathFindingVisualiser from parent*/
/*Thanks to Clément Mihailescu*/