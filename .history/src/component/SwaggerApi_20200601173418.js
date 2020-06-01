import React from "react";

class SwaggerApi extends React.Component {
  render() {
    console.log(
      `${Object.keys(this.props.api.paths)} and value  = ${Object.keys(
        this.props.api.paths
      ).map((path) => this.props.api.path[path])}`
    );
    return (
      <div>
        <p>{this.props.api.info.title}</p>
      </div>
    );
  }
}

export default SwaggerApi;
