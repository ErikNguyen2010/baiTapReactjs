import React, { Component } from 'react'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'

export default class Main extends Component {
  render() {
    return (
      <div className='container-fluid'>
          <div className="row">
              <div className="col-12 p-0">
                <Header />
              </div>
          </div>
          <div className="row">
              <Body/>
          </div>
          <div className="row">
              <div className="col-12 p-0">
              <Footer/>
              </div>
          </div>
      </div>
    )
  }
}
