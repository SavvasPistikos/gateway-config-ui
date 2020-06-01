import React from "react";

class SwaggerApi extends React.Component {
  render() {
    console.log(props);
    return (
      <div>
        <p>{this.props.api.info.title}</p>
      </div>
    );
  }
}

export default SwaggerApi;
