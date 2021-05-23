import React, { useState } from 'react';
import styled from '@emotion/styled';
import ApiHandler from './ApiHandler';
import RatingInformation from './screens/RatingInformation';
import Overview from './screens/Overview';
import Space from './assets/space.png';

const App = () => {
  const [quote, setQuote] = useState(null);
  const [errors, setErrors] = useState(null);

  const apiHandler = new ApiHandler();

  const handleCreateQuote = async (fields: QuoteCreateFieldsType) => {
    const resp = await apiHandler.postQuote(fields);

    if (resp.errors) {
      setErrors(resp.errors);
    } else if (resp.quote) {
      setQuote(resp.quote);
    }
  };

  const handleUpdateQuote = async (fields: QuoteUpdateFieldsType) => {
    const resp = await apiHandler.updateQuote(fields);

    if (resp.quote) {
      setQuote(resp.quote);
    }
  };

  const ActiveScreen = quote
    ? <Overview quote={quote} updateQuote={handleUpdateQuote} />
    : <RatingInformation errors={errors} createQuote={handleCreateQuote} />;

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
  align-items: center;
  background-image: url(${Space});
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

const Content = styled.div`
  background: #f2f2f2;
  border-radius: 5px;
  border: solid 1px #222;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 15px;
  width: 500px;
`;
