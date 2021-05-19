import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import dayOfYear from "dayjs/plugin/dayOfYear";
import isLeapYear from "dayjs/plugin/isLeapYear";
import { db } from "./firebase";

const axios = require("axios");
const https = require("https");
var btoa = require("btoa");
const api_key = "0f4754dff3d87f9a";
const secret_key =
  "MjYxNzU3ZjgyNmY4NWJjODUyOTI1MmI4MDBlOWY5ZGVjMGY0ZDZlZDAzMGJjM2IxNjQwMDY5MDhmMDhmYjIxOQ==";
const content_type = "application/json";
const source_addr = "INFO";

function Tab({ id, name, date, occasion, phone, relation }) {
  dayjs.extend(dayOfYear);
  dayjs.extend(isLeapYear);
  dayjs.extend(customParseFormat);
  const dateFormat = dayjs(date, "YYYY-MM-DD");

  const toDate = new Date(dateFormat).getTime();
  let present = new Date().getTime();
  const timeleft = toDate - present;
  const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  const modifier = () => {
    const leap = dayjs(date).isLeapYear();
    let newDate = "";
    if (leap === "true") {
      newDate = dayjs(date).add(366, "day");
    } else {
      newDate = dayjs(date).add(366, "day");
    }
    const upload = newDate.toISOString().split("T", 1)[0];

    db.collection("Customer").doc(id).update({
      date: upload,
    });
  };
  const linguist = () => {
    if (relation === "Myself") {
      return " your ";
    } else if (relation === "Friend") {
      return " your friend's ";
    } else if (relation === "Parent") {
      return " your parent's ";
    } else if (relation === "Grand Parent") {
      return " your grand parent's ";
    } else if (relation === "Boy Friend") {
      return " your boy Friend's ";
    } else if (relation === "Girl Friend") {
      return " your girl Friend's ";
    } else if (relation === "Husband") {
      return " your husband's ";
    } else if (relation === "Wife") {
      return " your wife's ";
    } else if (relation === "Brother") {
      return " your brother's ";
    } else if (relation === "Sister") {
      return " your sister's ";
    } else if (relation === "Niece") {
      return " your niece's ";
    } else if (relation === "Cousin") {
      return " your cousin's ";
    } else if (relation === "Family") {
      return " your family's ";
    } else {
      return "error with linguist";
    }
  };

  const draft = () => {
    if (occasion === "Wedding") {
      return `Greetings!, ${name}.
    Royal Oven cares about your well being and would like to remind you of${linguist()}${occasion} annivesary which will be happening soon.
    Thank you for last year's ${occasion} to let us be at your service, We would like that oppoturnity this year too.
    Best regards,
    Royal Oven.
    `;
    } else {
      return `Greetings!, ${name}.
    Royal Oven cares about your well being and would like to remind you of${linguist()}${occasion} which will be happening soon.
    Thank you for last year's ${occasion} to let us be at your service, We would like that oppoturnity this year too.
    Best regards,
    Royal Oven.
    `;
    }
  };

  const contact = {};
  for (let i = 0; i < 2; i++) {
    contact["recipient_id"] = 1;
    contact["dest_addr"] = phone;
  }

  function send_sms() {
    axios
      .post(
        "https://apisms.beem.africa/v1/send",
        {
          source_addr: source_addr,
          schedule_time: "",
          encoding: 0,
          message: draft(),
          recipients: [contact],
        },
        {
          headers: {
            "Content-Type": content_type,
            Authorization: "Basic " + btoa(api_key + ":" + secret_key),
          },
          httpsAgent: new https.Agent({
            rejectUnauthorized: false,
          }),
        }
      )
      .then((response) => console.log("Everything is working fine"))
      .catch((error) => console.error(error.response.data));
  }

  if (days < 2) {
    send_sms();
    console.log("sms sent");
    modifier();
  }

  return (
    <List>
      <h5>{name}</h5>
      <Counter>
        <section>
          <p>{days}</p>
          <p>
            <small>Days</small>
          </p>
        </section>
        <span>:</span>
        <section>
          <p>{hours}</p>
          <p>
            <small>Hours</small>
          </p>
        </section>
      </Counter>
    </List>
  );
}

export default Tab;

const List = styled.div`
  width: 40%;
  height: 8vh;
  background-color: #606060ff;
  border-radius: 15px;
  border: 1px solid #ecb924;
  margin: 5px 0;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  > h5 {
    color: #fee715ff;
    font-size: 40 px;
    flex: 1;
    margin-left: 10%;
    letter-spacing: 1px;
  }
`;

const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex: 3;
  width: 30%;
  margin-right: -10%;
  > section {
    padding: 5px;
    text-align: justify;
    > p {
      font-size: 20px;
      margin-left: 10px;
      margin-bottom: -10px;
      font-weight: 500;
      > small {
        font-size: 10px;
        margin-left: 0px;
      }
    }
  }
  > span {
    font-weight: 700;
    margin-left: 3%;
  }
`;
