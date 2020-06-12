import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";

function SwaggerPath(props) {
  const [state, setState] = useState({
    add: true,
    authorize: false,
    display: true,
    endpoint: "",
    path: props.url,
    trnsId: "",
  });

  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    formControl: {
      margin: theme.spacing(1),
      marginRight: theme.spacing(19),
    },
  }));

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    if (name === "add") {
      setState(
        {
          [name]: checked,
        },
        () => {
          props.handlePath(this);
        }
      );
    } else {
      setState(
        {
          [name]: value,
        },
        () => {
          props.handlePath(this);
        }
      );
    }
  };

  return (
    <div>
      <p>
        {props.method} {props.url}
        {/* <Checkbox
          checked={state.add}
          onChange={handleChange}
          name="add"
          color="primary"
        /> */}
      </p>
      <form className={useStyles().root} hidden={!state.add}>
        <div>
          <FormControl className={useStyles().formControl}>
            <InputLabel htmlFor="authorize">Authorize</InputLabel>
            <NativeSelect
              defaultValue={state.authorize}
              inputProps={{
                name: "authorize",
                id: "authorize",
              }}
            >
              <option value={true}>true</option>
              <option value={false}>false</option>
            </NativeSelect>
          </FormControl>
          <FormControl className={useStyles().formControl}>
            <InputLabel htmlFor="display">Display</InputLabel>
            <NativeSelect
              defaultValue={state.display}
              inputProps={{
                name: "display",
                id: "display",
              }}
            >
              <option value={true}>true</option>
              <option value={false}>false</option>
            </NativeSelect>
          </FormControl>
        </div>
        <div>
          <TextField
            label="Endpoint"
            defaultValue=""
            value={state.value}
            name="endpoint"
            onChange={handleChange}
          />
          <TextField
            label="Path"
            defaultValue={state.path}
            name="path"
            multiline
            onChange={handleChange}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="standard-number"
            label="TrnsId"
            type="number"
            name="trnsId"
            value={state.trnsId}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
      </form>
    </div>
  );
}

export default SwaggerPath;
