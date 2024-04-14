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

  todoData = [
    {
      id: "1",
      title: "공부하기",
      complete: true
    },
    {
      id: "2",
      title: "방청소하기",
      complete: false
    }
  ]

  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>

          {this.todoData.map((data) => (
            <div style={this.getStyle()} key={data.id}>
              <input type="checkbox" defaultChecked={data.complete} /> {data.title}
              <button style={this.btnStyle}>x</button>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
