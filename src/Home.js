import React, { useState } from "react";
import styled from "styled-components";
import Signup from "./Signup";
import { Link } from "react-router-dom";

function Home() {
  const [newCust, setNewCust] = useState(false);

  return (
    <Sms>
      <h1>ROYAL OVEN</h1>
      <div className="buttons">
        <button>
          <Link to="/customers">Customers</Link>
        </button>
        <button onClick={() => setNewCust(true)}>New Customer</button>
        {newCust && <Signup newCust={newCust} setNewCust={setNewCust} />}
      </div>
    </Sms>
  );
}

export default Home;

const Sms = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #ecb924 url(/asset/logo.png) no-repeat center;
  background-blend-mode: multiply;
  background-attachment: fixed;
  > h1 {
    color: rgba(218, 165, 32);
    font-size: 40px;
    text-shadow: 0px 5px 15px rgba(255, 210, 0, 0.7);
  }
  > .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    > button {
      width: 100%;
      height: 10vh;
      border-radius: 20px;
      outline: none;
      margin: 30%;
      color: white;
      letter-spacing: 1px;
      background: transparent;
      font-size: 20px;
      font-weight: 600;
      border: 1px solid white;
      box-shadow: inset -2px -2px 3px #606060ff,
        inset 5px 5px 5px rgba(255, 255, 255, 0.6);
      > a {
        outline: none;
        text-decoration: none;
        color: white;
        letter-spacing: 1px;
        font-size: 20px;
        font-weight: 600;
      }
    }
  }
`;
