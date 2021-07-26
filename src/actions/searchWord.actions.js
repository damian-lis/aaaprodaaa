import { SEARCH_WORD } from 'constants/search.constants';

export const setSearchWord = (word) => (dispatch) => {
  dispatch({ type: SEARCH_WORD, payload: word });
};
