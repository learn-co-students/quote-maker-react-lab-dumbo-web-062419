// TODO: Create action creators as defined in tests
// Quotes Actions
//   addQuote(quote: {})
//     1) should return an Object with a type of "ADD_QUOTE" and a quote object
//   removeQuote(quoteId: Integer)
//     2) should return an Object with a type of "REMOVE_QUOTE" and a quoteId
//   upvoteQuote(quoteId: Integer)
//     3) should return an Object with a type of "UPVOTE_QUOTE" and a quoteId
//   downvoteQuote(quoteId: INteger)
//     4) should return an Object with a type of "DOWNVOTE_QUOTE" and a quoteId

function addQuote(quote){
  return [...state, quote]
}

function removeQuote(quote){
  let idx = state.findIndex(q => q.id === quote.id);
  return [...state.slice(0, idx), ...state.slice(inx + 1)];
}
