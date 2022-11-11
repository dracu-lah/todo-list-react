import React, { Component } from "react";

import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      txtContent: "",
    };
  }

  txtChange = (e) => {
    this.setState({ txtContent: e.target.value });
  };

  addItem = (e) => {
    // alert('clicked')
    let currentText = this.state.txtContent;
    let currentItems = this.state.items;
    currentItems.push(currentText);
    this.setState({
      items: currentItems,
    });
  };

  removeItem = (i) => {
    // alert(i);
    let currentItems = this.state.items;
    currentItems.splice(i, 1);
    this.setState({
      items: currentItems,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
        <p>{this.state.txtContent}</p>
          <input type="text" id="text" onChange={this.txtChange} />
          <button className="add" onClick={this.addItem}>
            Add
          </button>
          <div className="list">
            <ul>
              {this.state.items.map((itm, k) => {
                return (
                  <li className="li" key={k}>
                    {itm}
                    <button className="remove"
                      onClick={() => {
                        this.removeItem(k);
                      }}
                    >
                      -
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        
        </div>
      </div>
    );
  }
}

export default App;
