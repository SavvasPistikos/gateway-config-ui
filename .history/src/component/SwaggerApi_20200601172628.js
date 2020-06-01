import React from "react";

class SwaggerApi extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.api.info.title}</p>
        <p>{this.props.api.paths[0]["/auth/api/v1.0/applications"]}</p>
      </div>
    );
  }
}

export default SwaggerApi;
