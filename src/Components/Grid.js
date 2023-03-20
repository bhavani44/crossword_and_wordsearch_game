import React from 'react';
import './grid.css';

const Grid = () => {
  const rows = 10;
  const cols = 10;
  const cells = [];

  // Generate the grid cells
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      cells.push(<div className="cell" key={`${i}-${j}`} />);
    }
  }

  // Generate the grid rows
  const rowsArr = Array(rows).fill(null);
  const gridRows = rowsArr.map((_, i) => (
    <div className="row" key={`row-${i}`}>
      {cells.slice(i * cols, i * cols + cols)}
    </div>
  ));

  return <div className="grid">{gridRows}</div>;
};

export default Grid;