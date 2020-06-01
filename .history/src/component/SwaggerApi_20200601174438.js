import React from "react";

class SwaggerApi extends React.Component {
  render() {
    let obj = this.props.api.paths["/alerting/api/v1.0/executeAlertQuery/{id}"][
      "post"
    ];
    console.log(obj);
    return (
      <div>
        <p>{this.props.api.info.title}</p>
      </div>
    );
  }
}

export default SwaggerApi;
