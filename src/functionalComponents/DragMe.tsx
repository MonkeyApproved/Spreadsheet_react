import React, { useState } from 'react';

interface position {
  x: number;
  y: number;
}

const DragMe: React.FC = ({ children }) => {
  const [translate, setTranslate] = useState<position>({ x: 0, y: 0 });
  let handler: (event: MouseEvent) => void;

  const mouseMove = (event: MouseEvent, initialPos: position) => {
    event.preventDefault();
    const posX = initialPos.x + event.clientX;
    const posY = initialPos.y + event.clientY;
    setTranslate({ x: posX, y: posY });
  };

  const mouseUp = (event: MouseEvent): void => {
    event.preventDefault();
    window.removeEventListener('mousemove', handler);
    window.removeEventListener('mouseup', mouseUp);
  };

  const mouseDown = (event: React.MouseEvent) => {
    event.preventDefault();
    const posX = translate.x - event.clientX;
    const posY = translate.y - event.clientY;
    handler = (event: MouseEvent) => {
      mouseMove(event, { x: posX, y: posY });
    };
    window.addEventListener('mousemove', handler);
    window.addEventListener('mouseup', mouseUp);
  };

  return (
    <div
      onMouseDown={mouseDown}
      style={{ transform: `translate(${translate.x}px, ${translate.y}px)` }}
    >
      {children}
    </div>
  );
};

export default DragMe;
