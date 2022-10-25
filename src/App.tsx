import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useAuth } from "./useAuth";

function App() {
  const { account, connect } = useAuth();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {!account ? (
          <button onClick={connect}>Connect wallet</button>
        ) : (
          <>
            <p>{account}</p>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
