import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Title } from '../styles';

type Props = {
  quote: QuoteType;
  updateQuote: (fields: QuoteUpdateFieldsType)=> Promise<void>;
}

const Overview = (props:Props) => {
  const { quote, updateQuote } = props;

  const selectedDeductible = quote.variable_selections.deductible;
  const selectedAsteroidCollision = quote.variable_selections.asteroid_collision;

  const [deductible, setDeductible] = useState(selectedDeductible);
  const [asteroidCollision, setAsteroidCollision] = useState(selectedAsteroidCollision);

  useEffect(() => {
    const { quoteId, policy_holder, rating_address } = quote;
    const fields: QuoteUpdateFieldsType = {
      quote: {
        quoteId,
        policy_holder,
        rating_address,
        variable_selections: {
          deductible,
          asteroid_collision: asteroidCollision,
        },
      },
    };

    updateQuote(fields);
  }, [deductible, asteroidCollision]);

  return (
    <>
      <Title>Quote Overview 🚀</Title>
      <Premium>
        { quote.premium.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })}
      </Premium>
      <OptionGroup>
        <OptionTitle>{quote.variable_options.deductible.title}</OptionTitle>
        <Description>{quote.variable_options.deductible.description}</Description>
        <OptionSelect onChange={(e) => setDeductible(+e.target.value)}>
          {
            quote.variable_options
              .deductible
              .values.map((val: QuoteType['variable_options']['deductible']['values'][0]) => (
                <option key={val} value={val}>{val}</option>
              ))
          }
        </OptionSelect>
      </OptionGroup>
      <OptionGroup>
        <OptionTitle>{quote.variable_options.asteroid_collision.title}</OptionTitle>
        <Description>{quote.variable_options.asteroid_collision.description}</Description>
        <OptionSelect onChange={(e) => setAsteroidCollision(+e.target.value)}>
          {
            quote.variable_options
              .asteroid_collision
              .values.map((val: QuoteType['variable_options']['asteroid_collision']['values'][0]) => (
                <option key={val} value={val}>{val}</option>
              ))
          }
        </OptionSelect>
      </OptionGroup>
    </>
  );
};

export default Overview;

const Premium = styled.div`
  color: #1DD3B0;
  font-size: 30px;
  font-weight: 600;
`;

const OptionTitle = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;

const Description = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
`;

const OptionGroup = styled.div`
  margin-top: 25px;
  margin-bottom: 20px;
`;

const OptionSelect = styled.select`
  padding: 5px;
  width: 100%;
  border-radius: 5px;
`;
