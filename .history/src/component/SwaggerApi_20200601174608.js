import React from "react";
import SwaggerPath from "./SwaggePath.js";

class SwaggerApi extends React.Component {
  render() {
    return (
      <div>
        <SwaggerPath s={this.props.api.info.title} />
      </div>
    );
  }
}

export default SwaggerApi;
