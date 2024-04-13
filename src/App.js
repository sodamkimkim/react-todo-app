import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  }
  getStyle = () => {
    return {
      padding: "20px",
      borderBottom: "1px dotted #ccc",
      TextDecoder: 'none'
    }
  }

  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>

          <div style={this.getStyle()}>
            <input type="checkbox" defaultChecked={false} /> 공부하기
            <button style={this.btnStyle}>x</button>
          </div>

          <div style={this.getStyle()}>
            <input type="checkbox" defaultChecked={false} /> 청소하기
            <button style={this.btnStyle}>x</button>
          </div>

        </div>
      </div>
    )
  }
}
