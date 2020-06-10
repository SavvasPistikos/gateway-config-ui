import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";

class SwaggerPath extends React.Component {
  state = {
    add: false,
    authorize: false,
    display: true,
    endpoint: "",
    path: this.props.url,
    trnsId: "",
  };

  handleChange = (event) => {
    const { name, value, checked } = event.target;
    if (name === "add") {
      this.setState(
        {
          [name]: checked,
        },
        () => {
          this.props.handlePath(this);
        }
      );
    } else {
      this.setState(
        {
          [name]: value,
        },
        () => {
          this.props.handlePath(this);
        }
      );
    }
  };

  render() {
    return (
      <div>
        <p>
          {this.props.method} {this.props.url}
          <Checkbox
            checked={this.state.add}
            onChange={this.handleChange}
            name="add"
            color="primary"
          />
        </p>
        <form hidden={!this.state.add}>
          <div className="x">
            <InputLabel shrink htmlFor="age-native-label-placeholder">
              Authorize
            </InputLabel>
            <NativeSelect
              value={this.state.authorize}
              name="authorize"
              onChange={this.handleChange}
            >
              <option value="false"> false</option>
              <option value="true"> true</option>
            </NativeSelect>
            <InputLabel shrink htmlFor="age-native-label-placeholder">
              Display
            </InputLabel>
            <NativeSelect
              value={this.state.display}
              name="display"
              onChange={this.handleChange}
            >
              <option value="false"> false</option>
              <option value="true"> true</option>
            </NativeSelect>
          </div>
          <div className="x">
            <TextField
              id="standard-multiline-flexible"
              label="Endpoint"
              multiline
              rowsMax={4}
              name="endpoint"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <div className="x">
            <TextField
              id="standard-multiline-flexible"
              label="Path"
              multiline
              rowsMax={4}
              name="path"
              value={this.state.path}
              onChange={this.handleChange}
            />
          </div>
          <div className="x">
            <TextField
              label="TrnsId"
              type="number"
              size="small"
              name="trnsId"
              onChange={this.handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SwaggerPath;
