import React from "react";
import ConfigurationForm from "./ConfigurationForm.js";

class SwaggerPath extends React.Component {
  state = { checked: false };

  handleChange = () => {
    this.setState((prev) => {
      return { checked: !prev.checked };
    });
    this.props.handlePath(this);
  };

  handleForm = (configuration) => {
    this.setState((prev) => {
      return {
        ...prev,
        configuration,
      };
    });
  };

  render() {
    return (
      <div>
        <p>
          {this.props.method} {this.props.url}
          <input
            type="checkbox"
            checked={this.state.checked}
            onChange={this.handleChange}
          ></input>
        </p>

        <ConfigurationForm handleForm={this.handleForm} />
      </div>
    );
  }
}

export default SwaggerPath;
