import React from "react";
import styled from "styled-components";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "./firebase";
import Tab from "./Tab";

function Customer() {
  const [channels] = useCollection(db.collection("Customer"));

  return (
    <Drawer>
      <div className="title">
        <h1>Customers</h1>
      </div>
      <div className="tabs">
        {channels?.docs.map((doc) => (
          <Tab
            key={doc.id}
            id={doc.id}
            name={doc.data().name}
            date={doc.data().date}
            occasion={doc.data().occasion}
            phone={doc.data().phone}
            relation={doc.data().relation}
          />
        ))}
      </div>
    </Drawer>
  );
}

export default Customer;

const Drawer = styled.div`
  width: 100%;
  min-height: 30vh;
  margin: 10px;
  border-radius: 10px;
  font: "opensans-bold", sans-serif;
  font-weight: 300;
  text-shadow: 0px 1px 3px #ecb924;
  padding: 0px 5px;
  color: white;
  padding: 5px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.1);

  > .title > h1 {
    display: grid;
    place-items: center;
    color: #ecb924;
    letter-spacing: 2px;
  }

  > .tabs {
    width: 100%;
    min-height: 30vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }
`;
