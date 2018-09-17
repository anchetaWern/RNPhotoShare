import { ADDED_CARD } from "./types";

export const addedCard = (id, url) => {
  console.log("i got called");
  return {
    type: ADDED_CARD,
    id: id,
    url: url
  };
};
