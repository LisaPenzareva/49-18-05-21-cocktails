import React, { Component } from "react";
import { DrinkContext } from "./App";

export default class Reactions extends Component {
  render() {
    return (
      <DrinkContext.Consumer>
        {(cntx) => {
          return (
            <div>
              <button
                onClick={() => {
                  cntx.likeChange(true, this.props.id);
                }}
              >
                {this.props.like} +
              </button>
              <button
                onClick={() => {
                  cntx.likeChange(false, this.props.id);
                }}
              >
                - {this.props.dislike}
              </button>
            </div>
          );
        }}
      </DrinkContext.Consumer>
    );
  }
}
