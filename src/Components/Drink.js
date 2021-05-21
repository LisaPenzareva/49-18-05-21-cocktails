import React, { Component } from "react";
import Reactions from "./Reactions";

export default class Drink extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.drink.strDrink}</h2>
        <img src={this.props.drink.strDrinkThumb} />
        <Reactions like={this.props.drink.like} dislike={this.props.dislike} id={this.props.idDrink}/>
      </div>
    );
  }
}
