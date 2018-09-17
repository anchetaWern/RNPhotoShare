import { ADDED_CARD } from "../actions/types";

const INITIAL_STATE = {
  cards: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADDED_CARD:
      const cards = [...state.cards, { id: action.id, url: action.url }];
      return { ...state, cards };

    default:
      return state;
  }
};
