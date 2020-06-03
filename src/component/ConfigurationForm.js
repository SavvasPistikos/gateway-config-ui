import React from "react";

class ConfigurationForm extends React.Component {
  state = {
    authorize: false,
    display: true,
    endpoint: "",
    path: "",
    trnsId: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    this.props.handleForm(this.state);
  };

  render() {
    return (
      <form>
        <label>authorize: </label>
        <select
          value={this.state.authorize}
          name="authorize"
          onChange={this.handleChange}
        >
          <option value="false"> false</option>
          <option value="true"> true</option>
        </select>
        <br></br>
        <label>display: </label>
        <select
          value={this.state.display}
          name="display"
          onChange={this.handleChange}
        >
          <option value="false"> false</option>
          <option value="true"> true</option>
        </select>
        <br></br>
        <label>endpoint: </label>
        <input
          //placeholder="endpoint"
          name="endpoint"
          onChange={this.handleChange}
        ></input>
        <br></br>
        <label>path: </label>
        <input
          //placeholder="endpoint"
          name="path"
          onChange={this.handleChange}
        ></input>
        <br></br>
        <label>trnsId: </label>
        <input
          //placeholder="endpoint"
          name="trnsId"
          onChange={this.handleChange}
        ></input>
      </form>
    );
  }
}

export default ConfigurationForm;
