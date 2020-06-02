import React from "react";

class SwaggerPath extends React.Component {
  state = { checked: false };

  handleChange = () => {
    this.setState((prev) => {
      return { checked: !prev.checked };
    });
    this.props.handlePath(this);
  };

  render() {
    let httpmethods = [];
    Object.keys(this.props.path).forEach((m) => {
      httpmethods.push(m);
    });

    return httpmethods.map((m) => {
      return (
        <div>
          <p>
            {m} {this.props.url}
            <input
              type="checkbox"
              checked={this.state.checked}
              onChange={this.handleChange}
            ></input>
          </p>
        </div>
      );
    });
  }
}

export default SwaggerPath;
