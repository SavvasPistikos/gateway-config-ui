import React from "react";

class SwaggerApi extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.api.info.title}</p>
        <p>{this.props.api.tags[0]["name"]}</p>
      </div>
    );
  }
}

export default SwaggerApi;
