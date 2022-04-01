import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
      <div>
        <div className="card text-center">
          <div className="card-header p-4">
            Header
          </div>
          <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, deserunt?</p>
          </div>
          <div className="card-footer text-muted">
            <button className="btn btn-primary"> Click me </button>
          </div>
        </div> 
        

      </div>
    )
  }
}
