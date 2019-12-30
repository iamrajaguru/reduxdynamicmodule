import { reducerTwo } from "../reducer/secondstate";
export const getSecond = () => {
  return {
    id: "two",
    reducerMap: {
      nameTwo: reducerTwo
    }
  };
};
