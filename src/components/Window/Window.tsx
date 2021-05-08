import React, { useState } from 'react';
import Draggable from 'react-draggable';
import styles from './Window.module.css';

interface Props {
  height: number;
  width: number;
}

const Window: React.FC<Props> = (props: Props) => {
  const [width, setWidth] = useState(props.width);
  const [height, setHeight] = useState(props.height);

  return (
    <Draggable>
      <div
        className={styles.Window}
        style={{ width: `${width}px`, height: `${height}px` }}
        data-testid="Window"
      >
        <div>Window Component</div>
      </div>
    </Draggable>
  );
};

export default Window;
