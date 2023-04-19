import React, { useState } from 'react';

const Puzzle = ({ image, size }) => {
  const [pieces, setPieces] = useState([...Array(size * size).keys()]);
  const [emptyIndex, setEmptyIndex] = useState(size * size - 1);

  const swap = (i, j) => {
    const newPieces = [...pieces];
    [newPieces[i], newPieces[j]] = [newPieces[j], newPieces[i]];
    setPieces(newPieces);
  };

  const handleClick = index => {
    if (
      (index + 1 === emptyIndex && (index + 1) % size !== 0) ||
      (index - 1 === emptyIndex && index % size !== 0) ||
      index + size === emptyIndex ||
      index - size === emptyIndex
    ) {
      swap(index, emptyIndex);
      setEmptyIndex(index);
    }
  };

  return (
    <div
      style={{
        width: `${size * 100}px`,
        height: `${size * 100}px`,
        display: 'grid',
        gridTemplateColumns: `repeat(${size}, 1fr)`
      }}
    >
    {console.log("entered")}
      {pieces.map((piece, index) =>
        piece === size * size - 1 ? (
          <div
            key={piece}
            style={{
              width: '100px',
              height: '100px',
              border: '1px solid black'
            }}
          />
        ) : (
          <div
            key={piece}
            onClick={() => handleClick(index)}
            style={{
              width: '100px',
              height: '100px',
              border: '1px solid black',
              backgroundImage: `url(${image})`,
              backgroundPosition: `${(piece % size) * -100}px ${
                Math.floor(piece / size) * -100
              }px`
            }}
          />
        )
      )}
    </div>
  );
};

export default Puzzle;