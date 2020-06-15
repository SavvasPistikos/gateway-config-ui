import React, { useEffect } from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

function SwaggerPath(props) {
  const [state, setState] = useState({
    method: props.method,
    path = props.url,
    show: false,
    add: false,
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

  useEffect(() => {
    props.handlePath(state);
  }, []);

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    if (name === "add") {
      setState({
        [name]: checked,
      });
    } else {
      setState({
        [name]: value,
      });
    }
  };

  return (
    <div>
      <Button onClick={() => setState({ ["show"]: !state.show })}>
        <span style={{ color: "blue" }}>{`${props.method}`}</span> {props.url}
        {/* <Checkbox
          checked={state.add}
          onChange={handleChange}
          name="add"
          color="primary"
        /> */}
      </Button>
      <form className={useStyles().root} hidden={!state.show}>
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
            value={state.trnsId || ""}
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
