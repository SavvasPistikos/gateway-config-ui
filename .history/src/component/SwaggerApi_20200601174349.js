import React from "react";

class SwaggerApi extends React.Component {
  render() {
    let obj = this.props.api.paths;
    console.log(obj);
    return (
      <div>
        <p>{this.props.api.info.title}</p>
      </div>
    );
  }
}

export default SwaggerApi;
