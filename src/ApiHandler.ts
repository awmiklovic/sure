export class ApiHandler {
  private API_URL: string;

  constructor() {
    this.API_URL = 'https://fed-challenge-api.sure.now.sh/api/v1/quotes';
  }

  async postQuote(fields: QuoteCreateFieldsType) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fields),
    };

    const resp = await fetch(this.API_URL, options);
    const json: QuoteResponseType = await resp.json();
    return json;
  }

  async updateQuote(fields: QuoteUpdateFieldsType) {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fields),
    };

    const resp = await fetch(`${this.API_URL}/${fields.quote.quoteId}`, options);
    const json: QuoteResponseType = await resp.json();
    return json;
  }
}

export default ApiHandler;
