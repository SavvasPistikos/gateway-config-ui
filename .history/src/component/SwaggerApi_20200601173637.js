import React from "react";

class SwaggerApi extends React.Component {
  render() {
    console.log(
      `${Object.keys(this.props.api.paths)} and value  = ${Object.values(
        this.props.api.paths
      )}`
    );
    return (
      <div>
        <p>{this.props.api.info.title}</p>
      </div>
    );
  }
}

export default SwaggerApi;
