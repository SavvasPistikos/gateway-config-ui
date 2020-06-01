import React from "react";

class SwaggerApi extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.api.info.title}</p>
        <p>{this.props.api.paths["/auth/api/v1.0/applications"]}</p>
      </div>
    );
  }
}

export default SwaggerApi;
