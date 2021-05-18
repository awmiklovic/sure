import React from 'react';
import styled from '@emotion/styled';
import _ from 'lodash';

interface Props {
    placeholder: string;
    label: string;
    value: React.InputHTMLAttributes<Text>['value'];
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    fullWidth?: boolean;
}

const TextField = (props: Props): React.ReactElement => {
  const {
    label, placeholder, onChange, value, fullWidth, error,
  } = props;

  return (
    <Container fullWidth={fullWidth}>
      {label}
      <Input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {error && (
        <Error>{_.startCase(error)}</Error>
      )}
    </Container>
  );
};

export default TextField;

type InputProps = {
  fullWidth?: boolean;
}

const Container = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  position: relative;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '49%')};
`;

const Input = styled.input`
  margin-top: 5px;
  padding: 15px;
`;

const Error = styled.p`
  color: red;
  margin: 0px;
  position: absolute;
  right: 0px;
  top: 0px;
`;
