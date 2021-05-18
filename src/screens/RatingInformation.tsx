import React, { useState } from 'react';
import styled from '@emotion/styled';
import TextField from '../components/TextField';
import { Title } from '../styles';

type Props = {
  errors: QuoteCreateFieldsType;
  createQuote: (quote: QuoteCreateFieldsType)=> void;
}

const RatingInformation = (props: Props) => {
  const { createQuote, errors } = props;

  const [fields, setFields] = useState<QuoteCreateFieldsType>({
    first_name: '',
    last_name: '',
    address: {
      line_1: '',
      line_2: '',
      city: '',
      region: '',
      postal: '',
    },
  });

  const updatePolicyHolderField = (
    field: keyof QuoteCreateFieldsType, event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFields({
      ...fields,
      [field]: event.target.value,
    });
  };

  const updateAddressField = (
    field: keyof QuoteCreateFieldsType['address'], event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFields({
      ...fields,
      address: {
        ...fields.address,
        [field]: event.target.value,
      },
    });
  };

  return (
    <>
      <Title>Rating Information 🚀</Title>
      <TextField
        label="First Name"
        placeholder="Enter First Name"
        value={fields.first_name}
        onChange={(e) => updatePolicyHolderField('first_name', e)}
        error={errors?.first_name}
      />
      <TextField
        label="Last Name"
        placeholder="Enter Last Name"
        value={fields.last_name}
        onChange={(e) => updatePolicyHolderField('last_name', e)}
        error={errors?.last_name}
      />
      <TextField
        label="Line 1"
        placeholder="Enter Line 1"
        value={fields.address.line_1}
        onChange={(e) => updateAddressField('line_1', e)}
        fullWidth
        error={errors?.address?.line_1}
      />
      <TextField
        label="Line 2"
        placeholder="Enter Line 2"
        value={fields.address.line_2}
        onChange={(e) => updateAddressField('line_2', e)}
        fullWidth
        error={errors?.address?.line_2}
      />
      <TextField
        label="City"
        placeholder="Enter City"
        value={fields.address.city}
        onChange={(e) => updateAddressField('city', e)}
        error={errors?.address?.city}
      />
      <TextField
        label="Region"
        placeholder="Enter Region"
        value={fields.address.region}
        onChange={(e) => updateAddressField('region', e)}
        error={errors?.address?.region}
      />
      <TextField
        label="Postal"
        placeholder="Enter Postal"
        value={fields.address.postal}
        onChange={(e) => updateAddressField('postal', e)}
        fullWidth
        error={errors?.address?.postal}
      />
      <Button onClick={() => createQuote(fields)}>Get Quote</Button>
    </>
  );
};

export default RatingInformation;

export const Button = styled.button`
  color: white;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 600;
  background: #086375;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  padding: 15px;
  width: 100%;
  &: hover {
    background: #086375BB;
  }
`;
