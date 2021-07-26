import { SEARCH_WORD } from 'constants/search.constants';

export const searchWordReducer = (state = '', action) => {
  switch (action.type) {
    case SEARCH_WORD:
      return {
        ...state,
        searchWord: action.payload,
      };

    default:
      return state;
  }
};
