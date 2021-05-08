import { Input } from 'antd';
import React from 'react';
import getEquation from '../../equations/equation';
import { logTokenList } from '../../equations/printEquation';
import styles from './EquationInput.module.css';

interface Props {
  name: string;
}

const EquationInput: React.FC<Props> = (props) => {
  const { name } = props;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value;
    const equation = getEquation(input);
    logTokenList(equation.tokens);
  };

  return (
    <div className={styles.EquationInput} data-testid={`EquationInput_${name}`}>
      <Input placeholder={name} onChange={onChange}></Input>
    </div>
  );
};

export default EquationInput;
