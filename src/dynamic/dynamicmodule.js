import React from "react";
import Secondcomponent from "../component/secondcomponent";
import { DynamicModuleLoader } from "redux-dynamic-modules";
import { getSecond } from "../modules/getSecondModule";
class dynamic extends React.Component {
  render = () => {
    return (
      <DynamicModuleLoader modules={[getSecond()]}>
        <Secondcomponent />
      </DynamicModuleLoader>
    );
  };
}

export default dynamic;
