import React from "react";
import swaggerData from "./SwaggerData.js";
import SwaggerApi from "./SwaggerApi.js";

class SwaggerApiContainer extends React.Component {
  render() {
    return Object.keys(swaggerData).map((api) => (
      <SwaggerApi api={swaggerData[api]} />
    ));
  }
}

export default SwaggerApiContainer;
