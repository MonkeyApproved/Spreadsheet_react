import React, { CSSProperties } from 'react';
import mainStyles from '../styles/mainStyles';

interface Props {
  styles?: CSSProperties;
  className?: string;
}

const styles = {
  backgroundColor: mainStyles.primaryColor,
  border: mainStyles.primaryBorder,
};

const PrimaryDiv: React.FC<Props> = (props: Props) => {
  return <div style={{ ...styles, ...props.styles }}></div>;
};

export default PrimaryDiv;
