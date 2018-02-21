import axios from 'axios';

const defaultState = { booksArr: [], likesArr: [] };

const books = (prevState = defaultState, action) => {
  switch (action.type) {
    case 'SAVE_BOOKS':
      return { ...prevState, booksArr: action.payload };
    case 'GET_LIKES':
      return { ...prevState, likesArr: action.payload };
    default: return prevState;
  }
};

export default books;
