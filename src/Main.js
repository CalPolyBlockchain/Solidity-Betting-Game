import React, { Component } from 'react';
import './App.css';

class Main extends Component {

  render() {
    return (
      <div className="container-fluid mt-5 col-m-4" style={{ maxWidth: '550px' }}>
        <div className="col-sm">
          <main role="main" className="col-lg-12 text-monospace text-center text-white">
            <div className="content mr-auto ml-auto">
              <div id="content" className="mt-3" >
                <div className="card mb-4 bg-dark border-danger">
                  <div className="card-body">
                    <div className="input-group mb-4">
                      <input
                        type="number"
                        step="0.01"
                        className="form-control form-control-md"
                        onChange={(e) => this.props.onChange(e.target.value)}
                      />
                      <div className="input-group-append">
                        <div className="input-group-text">
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-danger btn-lg"
                      onClick={(event) => {
                        event.preventDefault()
                        const amount = (this.props.amount).toString()
                        this.props.makeBet(0, window.web3.utils.toWei(amount))
                      }}>
                        Low
                    </button>
                    &nbsp;&nbsp;&nbsp;
                    <button
                      type="submit"
                      className="btn btn-success btn-lg"
                      onClick={(event) => {
                        event.preventDefault()
                        const amount = (this.props.amount).toString()
                        this.props.makeBet(1, window.web3.utils.toWei(amount))
                      }}>
                        High
                    </button>
                  </div>
                  <div>
                    {!this.props.balance ? 
                    <div></div> :
                      <div className="float-right">
                        <b>Balance:</b> {Number(window.web3.utils.fromWei((this.props.balance).toString())).toFixed(5)} <b>ETH&nbsp;</b>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Main;