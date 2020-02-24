import uuid from 'uuid/v1';

export const bookReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [
        ...state,
        {
          id: uuid(),
          title: action.book.title,
          author: action.book.author
        }
      ];
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
};
