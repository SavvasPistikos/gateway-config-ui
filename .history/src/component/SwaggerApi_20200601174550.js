import React from "react";

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
