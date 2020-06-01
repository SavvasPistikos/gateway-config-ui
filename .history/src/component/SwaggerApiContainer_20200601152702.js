import React from "react";
import swaggerData from "./SwaggerData.js";
import SwaggerApi from "./SwaggerApi.js";

class SwaggerApiContainer extends React.Component {
  render() {
    console.log(swaggerData);
    swaggerData.map((api) => <SwaggerApi api={api} />);
  }
}

export default SwaggerApiContainer;
