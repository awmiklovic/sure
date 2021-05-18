import React, { useState } from 'react';
import styled from '@emotion/styled';
import RatingInformation from './screens/RatingInformation';
import Overview from './screens/Overview';
import Space from './assets/space.png';

const API_URL = 'https://fed-challenge-api.sure.now.sh/api/v1/quotes';

const App = () => {
  const [quote, setQuote] = useState(null);
  const [errors, setErrors] = useState(null);

  const createQuote = async (fields: QuoteCreateFieldsType) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fields),
    };

    const resp = await fetch(API_URL, options);
    const json: QuoteResponseType = await resp.json();

    if (json.quote) {
      setQuote(json.quote);
    }

    if (json.errors) {
      setErrors(json.errors);
    }
  };

  const updateQuote = async (fields: QuoteUpdateFieldsType) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fields),
    };

    const resp = await fetch(`${API_URL}/${fields.quote.quoteId}`, options);
    const json: QuoteResponseType = await resp.json();

    if (json.quote) {
      setQuote(json.quote);
    }
  };

  const ActiveScreen = quote
    ? <Overview quote={quote} updateQuote={updateQuote} />
    : <RatingInformation errors={errors} createQuote={createQuote} />;

  return (
    <Container>
      <Content>
        { ActiveScreen }
      </Content>
    </Container>
  );
};

export default App;

const Container = styled.div`
  background-image: url(${Space});
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Content = styled.div`
  background: #f2f2f2;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 500px;
  border: solid 1px #222;
  border-radius: 5px;
  padding: 15px;
  justify-content: space-between;
`;
