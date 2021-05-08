import React, { useState } from 'react';
import styles from './Window.module.css';

interface Props {
  onClose: () => {};
  onDrag: () => {};
  size: 'normal';
}

const TopBar: React.FC<Props> = (props: Props) => {
  return (
    <div className={styles.TopBar} data-testid="Window">
      TopBar
    </div>
  );
};

export default TopBar;
