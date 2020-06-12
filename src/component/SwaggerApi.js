import React from "react";
import { useState } from "react";
import SwaggerPath from "./SwaggePath.js";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import YAML from "json-to-pretty-yaml";
import Collapse from "@material-ui/core/Collapse";
import { makeStyles } from "@material-ui/core/styles";

function SwaggerApi(props) {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({ [props.name]: { paths: [] } });

  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiList-root": {
        width: "100%",
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
      },
    },
  }));

  const handlePath = (path) => {
    let newPaths = [];
    if (!path.state.add) {
      newPaths = state[props.name].paths.filter(
        (p) => !(p.path === path.props.url && p.method === path.props.method)
      );
    } else {
      newPaths = [...state[props.name].paths];
      let idx = newPaths.findIndex(
        (p) => p.path === path.props.url && p.method === path.props.method
      );
      if (idx === -1) {
        newPaths = [
          ...state[props.name].paths,
          {
            path: path.props.url,
            method: path.props.method,
            ...path.state,
          },
        ];
      } else {
        newPaths[idx] = {
          path: path.props.url,
          method: path.props.method,
          ...path.state,
        };
      }
    }
    setState(() => {
      return {
        [props.name]: { paths: newPaths },
      };
    }, console.log(YAML.stringify(state)));
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <List
        onClick={handleClick}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            {props.api.info.title}
          </ListSubheader>
        }
      >
        {Object.entries(props.api.paths).map(([k, v]) =>
          Object.keys(v).map((m) => {
            return (
              <Collapse in={open} timeout="auto" unmountOnExit>
                <ListItem>
                  <SwaggerPath method={m} url={k} handlePath={handlePath} />
                </ListItem>
              </Collapse>
            );
          })
        )}
      </List>
    </div>
  );
}

export default SwaggerApi;
