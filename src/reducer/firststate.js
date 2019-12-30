const initialState = {
  name: "kowtham"
};

export const reducerOne = (state = initialState, action) => {
  switch (action.type) {
    case "ONCLICK":
      const statee = { ...state };
      statee.name = "kk";
      console.log(statee);
      return statee;
    default:
      return state;
  }
};
