const GET_LIKES = 'GET_LIKES';
const SAVE_BOOKS = 'SAVE_BOOKS';

const getLikes = likes => ({
  type: GET_LIKES,
  payload: likes,
});

const saveBooks = books => ({
  type: SAVE_BOOKS,
  payload: books,
});
export { saveBooks, getLikes };

