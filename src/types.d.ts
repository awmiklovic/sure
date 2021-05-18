interface RatingAddressType {
    line_1: string,
    line_2?: string,
    city: string,
    region: string,
    postal: string
}

interface PolicyHolderType {
    first_name: string,
    last_name: string
}

type VariableOptionsType = {
    deductible: {
        title: string,
        description: string,
        values: Array
    },
    asteroid_collision: {
        title: string,
        description: string,
        values: Array
    }
}

type VariableSelections = {
    deductible: number,
    asteroid_collision: number
}

type QuoteType = PolicyHolderType & {
    quoteId: string,
    policy_holder: PolicyHolderType,
    rating_address: RatingAddressType,
    premium: number,
    variable_options: VariableOptionsType,
    variable_selections: VariableSelections
}

type QuoteCreateFieldsType = PolicyHolderType & {
    address: RatingAddressType
}

type QuoteUpdateFieldsType = {
    quote: {
        quoteId: string,
        rating_address: RatingAddressType,
        policy_holder: PolicyHolderType,
        variable_selections: VarialbeSelections
    }
}

type QuoteResponseType = {
    quote?: QuoteType,
    errors?: QuoteType
}
