// EmojiBook.js

import React from 'react';
import './EmojiBook.css';

const EmojiBook = () => {
  const numOfBooks = 100;
  const book = '📚';

  const createBooks = () => {
    const bookElements = [];
    for (let i = 0; i < numOfBooks; i++) {
      const initialX = Math.random() * 100;
      const initialY = Math.random() * 100;
      const endX = Math.random() * 100;
      const endY = Math.random() * 100;
      bookElements.push(
        <div
          key={i}
          className={`emoji-book`}
          style={{
            position: 'absolute',
            top: `${initialY}%`,
            left: `${initialX}%`,
            animation: `move 3s ease-in forwards`,
            animationDelay: `${i * 0.5}s`,
            opacity: 0,
          }}
          data-end-x={endX}
          data-end-y={endY}
        >
          {book}
        </div>
      );
    }
    return bookElements;
  };

  return <div className="emoji-book-container">{createBooks()}</div>;
};

export default EmojiBook;




