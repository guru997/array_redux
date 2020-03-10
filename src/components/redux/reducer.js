import { LIST, UPDATE } from "./types";

const intialstate = {
  obj: "",
  input: []
};

const reducer = (state = intialstate, action) => {
  switch (action.type) {
    case UPDATE:
      return { ...state, [action.k]: action.v };
    case LIST: {
      let arr = [...state.input, action.input];

      console.log(arr);

      return {
        ...state.input,
        input: arr
      };
    }
    default:
      return state;
  }
};

export default reducer;
