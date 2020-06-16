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
    show: false,
    add: false,
  });

  const [configuration, setConfiguration] = useState({
    authorize: false,
    display: true,
    path: props.url,
    method: props.method,
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
      setState({
        ...state,
        [name]: checked,
      });
    } else {
      setConfiguration({
        ...configuration,
        [name]: value,
      });
    }
  };

  useEffect(() => {
    props.handlePath(props, state.add, configuration);
  }, [state.add, configuration]);

  return (
    <div>
      <Button onClick={() => setState({ ...state, ["show"]: !state.show })}>
        <span style={{ color: "blue" }}>{`${props.method}`}</span> {props.url}
      </Button>
      <form className={useStyles().root} hidden={!state.show}>
        <div>
          <FormControl className={useStyles().formControl}>
            <InputLabel htmlFor="authorize">Authorize</InputLabel>
            <NativeSelect
              defaultValue={configuration.authorize}
              onChange={handleChange}
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
              defaultValue={configuration.display}
              onChange={handleChange}
              inputProps={{
                name: "display",
                id: "display",
              }}
            >
              <option value={true}>true</option>
              <option value={false}>false</option>
            </NativeSelect>
          </FormControl>
          <Checkbox
            checked={state.add || false}
            onChange={handleChange}
            name="add"
            color="primary"
          />
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
            defaultValue={props.url}
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
            value={configuration.trnsId || ""}
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
