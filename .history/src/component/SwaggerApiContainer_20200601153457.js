import React from "react";
import swaggerData from "./SwaggerData.js";
import auth from "../resourses/swagger/auth/v1.0/swagger.json";
import SwaggerApi from "./SwaggerApi.js";

class SwaggerApiContainer extends React.Component {
  render() {
    return Object.keys(swaggerData).map((api) => <SwaggerApi api={api} />);
  }
}

export default SwaggerApiContainer;
