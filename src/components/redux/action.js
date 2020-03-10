import { LIST, UPDATE } from "./types";

// let id = 0;
export const updateInput = (k, v) => ({
  k,
  v,
  type: UPDATE
});

export const list = input => {
  return {
    type: LIST,
    input: input
  };
};
