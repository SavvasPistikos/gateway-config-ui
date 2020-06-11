import React from "react";
import { useState } from "react";
import SwaggerPath from "./SwaggePath.js";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import YAML from "json-to-pretty-yaml";

function SwaggerApi(props) {
  const [state, setState] = useState({ [props.name]: { paths: [] } });

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

  return (
    <div>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            {props.api.info.title}
          </ListSubheader>
        }
      ></List>{" "}
      {Object.entries(props.api.paths).map(([k, v]) =>
        Object.keys(v).map((m) => {
          return (
            <ListItem button>
              <SwaggerPath method={m} url={k} handlePath={handlePath} />
            </ListItem>
          );
        })
      )}
    </div>
  );
}

export default SwaggerApi;
