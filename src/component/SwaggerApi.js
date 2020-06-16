import React from "react";
import { useState } from "react";
import SwaggerPath from "./SwaggePath.js";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import YAML from "json-to-pretty-yaml";
import Collapse from "@material-ui/core/Collapse";
import { makeStyles } from "@material-ui/core/styles";

function SwaggerApi(props) {
  const [open, setOpen] = useState(false);
  const [api, setApi] = useState({ [props.name]: { paths: [] } });

  // const useStyles = makeStyles((theme) => ({
  //   root: {
  //     "& .MuiList-root": {
  //       width: "100%",
  //       maxWidth: 360,
  //       backgroundColor: theme.palette.background.paper,
  //     },
  //   },
  // }));

  const handleClick = () => {
    setOpen(!open);
  };

  const handlePath = (pathProps, add, configuration) => {
    let newPaths = [];

    if (!add) {
      newPaths = api[props.name].paths.filter(
        (p) => !(p.path === pathProps.url && p.method === pathProps.method)
      );
    } else {
      newPaths = [...api[props.name].paths];
      let idx = newPaths.findIndex(
        (p) => p.path === pathProps.url && p.method === pathProps.method
      );

      if (idx === -1) {
        newPaths = [
          ...api[props.name].paths,
          {
            ...configuration,
          },
        ];
      } else {
        newPaths[idx] = {
          ...configuration,
        };
      }
    }

    setApi({
      [props.name]: { paths: newPaths },
    });
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClick}
        style={{
          backgroundColor: api[props.name].paths.length === 0 ? "blue" : "red",
        }}
      >
        {props.api.info.title}
      </Button>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {Object.entries(props.api.paths).map(([k, v]) =>
          Object.keys(v).map((m, index) => {
            return (
              <ListItem>
                <SwaggerPath
                  key={index}
                  method={m}
                  url={k}
                  handlePath={handlePath}
                />
              </ListItem>
            );
          })
        )}
      </Collapse>
    </div>
  );
}

export default SwaggerApi;
