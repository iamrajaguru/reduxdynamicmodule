const initialState = {
  name: "sanjay"
};

export const reducerTwo = (state = initialState, action) => {
  switch (action.type) {
    case "ONCLICKS":
      const statee = { ...state };
      statee.name = "kk";
      console.log(statee);
      return statee;
    default:
      return state;
  }
};
