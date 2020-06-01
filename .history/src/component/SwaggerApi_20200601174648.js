import React from "react";
import SwaggerPath from "./SwaggePath.js";

class SwaggerApi extends React.Component {
  render() {
    return (
      <div>
        <SwaggerPath path={Object.keys(this.props.api.paths).map(s)=> s} />
      </div>
    );
  }
}

export default SwaggerApi;
