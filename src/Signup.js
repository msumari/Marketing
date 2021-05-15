import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { db } from "./firebase";

function Signup({ setNewCust }) {
  const { register, handleSubmit, getValues } = useForm();
  let [format, setFormat] = useState("");
  const close = (e) => {
    if (e.target.classList.contains("back")) {
      setNewCust(false);
    }
  };
  const onSubmit = (data, r) => {
    r.preventDefault();

    let phone = getValues("recepient");
    setFormat((format = phone.slice(1)));
    const code = `255${format}`;

    db.collection("Customer").add({
      name: getValues("name"),
      date: getValues("date"),
      phone: code,
      occasion: getValues("occasion"),
      relation: getValues("relate"),
    });
    r.target.reset();
  };

  return (
    <div>
      <Sign className="back" onClick={close}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <img src="./asset/logo.png" alt="royal oven" />
          <input
            className="name"
            name="name"
            type="textarea"
            placeholder="Full Name"
            ref={register({
              required: true,
            })}
          />
          <input
            type="text"
            name="recepient"
            placeholder="Phone number"
            ref={register({
              required: true,
            })}
          />
          <input
            type="date"
            name="date"
            ref={register({
              required: true,
            })}
          />
          <label for="occasion">Choose Occasion</label>
          <select name="occasion" ref={register}>
            <option value="Birthday">Birthday</option>
            <option value="Annivesary">Annivesary</option>
            <option value="Wedding">Wedding</option>
            <option value="Graduation">Graduation</option>
            <option value="Engagment">Engagment</option>
          </select>
          <label for="relate">Choose Relation</label>
          <select name="relate" ref={register}>
            <option value="Myself">Myself</option>
            <option value="Friend">Friend</option>
            <option value="Parent">Parent</option>
            <option value="Grand Parent">Grand Parent</option>
            <option value="Boy Friend">Boy Friend</option>
            <option value="Girl Friend">Girl Friend</option>
            <option value="Husband">Husband</option>
            <option value="Wife">Wife</option>
            <option value="Brother">Brother</option>
            <option value="Sister">Sister</option>
            <option value="Niece">Niece</option>
            <option value="Cousin">Cousin</option>
            <option value="Family">Family</option>
          </select>
          <button type="submit">Register</button>
        </form>
      </Sign>
    </div>
  );
}

export default Signup;
const Sign = styled.div`
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
  > form {
    width: 30%;
    height: 70vh;
    border: 1px solid white;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(218, 165, 32);
    background-color: white;
    display: grid;
    place-items: center;
    > img {
      width: 20%;
    }
    > label {
      color: black;
      background-color: rgba(255, 215, 0);
      text-transform: uppercase;
      font-weight: 700;
      font-size: 10px;
      padding: 5px;
      border-radius: 5px;
    }
    > input {
      width: 90%;
      height: 4vh;
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.4);
      outline: none;
      color: white;
    }
    > input::placeholder {
      color: white;
    }
    > select {
      width: 90%;
      height: 4vh;
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.4);
      outline: none;
      color: white;
    }
    > select::placeholder {
      color: white;
    }
    > button {
      color: white;
      background-color: rgba(153, 101, 21);
      border-radius: 5px;
      border-color: transparent;
    }
  }
`;
