// MatrixBackground.js
import React from 'react';
import './MatrixBackground.css';

const numberOfColumns = 100;
const maxColumnLength = 30;
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const MatrixBackground = () => {
  const columns = [];

  for (let i = 0; i < numberOfColumns; i++) {
    const columnLength = Math.floor(Math.random() * maxColumnLength) + 5;
    const column = [];

    for (let j = 0; j < columnLength; j++) {
      const randomChar = characters.charAt(Math.floor(Math.random() * characters.length));
      column.push(randomChar);
    }

    columns.push(column);
  }

  return (
    <div className="matrix-container">
      {columns.map((column, columnIndex) => (
        <div key={columnIndex} className="matrix-column" style={{ '--column-index': columnIndex }}>
          {column.map((char, charIndex) => (
            <span key={charIndex} className="matrix-char">
              {char}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MatrixBackground;
