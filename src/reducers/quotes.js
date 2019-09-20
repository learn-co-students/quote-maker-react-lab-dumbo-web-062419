export default (state = [], action) => {
  let index;
  let quote;

  switch (action.type) {

    case 'ADD_QUOTE':
      return state.concat(action.quote);
      //state gets action.quote added to it in a copy of state, not a mutation of the original state

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);
      // return the contents of state where the quote.id is not equal to the action.quoteID - everything except the passed in quote

    case 'UPVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index];
      //find the upvoted quotes index in state, use the index to assign a quote variable.

      return [
        ...state.slice(0, index),
        Object.assign({}, quote, { votes: quote.votes += 1 }),
        ...state.slice(index + 1)
      ];

       //copy current state, slice out everything from 0 to the index already defined earlier, copy the contents of the quote, and add a vote to its vote property, copy state again and slice copies the nex index into the array

    case 'DOWNVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index];
      if (quote.votes > 0) {
        return [
          ...state.slice(0, index),
          Object.assign({}, quote, { votes: quote.votes -= 1 }),
          ...state.slice(index + 1)
        ];
      }
      return state;

    default: 
      return state;
  }
}