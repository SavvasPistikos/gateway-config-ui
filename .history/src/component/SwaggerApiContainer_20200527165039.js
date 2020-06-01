import React from "react";
import swaggerData from "./SwaggerData.js";
import SwaggerApi from "./SwaggerApi.js";

class SwaggerApiContainer extends React.Component {
  render() {
    swaggerData.map((api) => <SwaggerApi />);
  }
}

export default SwaggerApiContainer;
