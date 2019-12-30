import { reducerOne } from "../reducer/firststate";
import { reducerTwo } from "../reducer/secondstate";
export const getInitial = () => {
  return {
    id: "one",
    reducerMap: {
      nameOne: reducerOne
    }
  };
};
