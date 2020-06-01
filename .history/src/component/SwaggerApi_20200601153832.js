import React from "react";

class SwaggerApi extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.api.info.title}</p>
        <p>GET {this.props.api.paths[0].get}</p>
      </div>
    );
  }
}

export default SwaggerApi;
