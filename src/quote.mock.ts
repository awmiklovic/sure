export const quoteMock: QuoteResponseType = {
  quote: {
    quoteId: 'UP5413263',
    rating_address: {
      line_1: '123 Mulberry Lane',
      line_2: '3B',
      city: 'Brooklyn',
      region: 'NY',
      postal: '11211',
    },
    policy_holder: {
      first_name: 'Prairie',
      last_name: 'Prairie',
    },
    variable_options: {
      deductible: {
        title: 'Deductible',
        description: 'The amount of money you will pay in an insurance claim before the insurance coverage kicks in.',
        values: [
          500,
          1000,
          2000,
        ],
      },
      asteroid_collision: {
        title: 'Asteroid Collision Limit',
        description: 'The maximum amount covered for damages caused by asteroid collisions.',
        values: [
          100000,
          300000,
          500000,
          1000000,
        ],
      },
    },
    variable_selections: {
      deductible: 500,
      asteroid_collision: 100000,
    },
    premium: 6000,
  },
};

export default quoteMock;
