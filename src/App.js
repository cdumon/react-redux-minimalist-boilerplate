import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import { simpleAction } from './actions/simpleAction';

const App = (props) => {
  const simpleAction = (event) => {
    props.simpleAction();
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <pre>{ JSON.stringify(props) }</pre>
        <button onClick={simpleAction}>Test redux action</button>
      </header>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
