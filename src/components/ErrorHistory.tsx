import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState, useEffect } from "react";
import "./ErrorHistory.css";

import { IonApp } from "@ionic/react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 600, pv: 2600, amt: 2400 },
  { name: "Page C", uv: 2000, pv: 2800, amt: 2400 },
  { name: "Page D", uv: 50, pv: 3000, amt: 2400 },
  { name: "Page E", uv: 3500, pv: 2400, amt: 2400 },
  { name: "Page F", uv: 750, pv: 2400, amt: 2400 },
  { name: "Page G", uv: 1600, pv: 2400, amt: 2400 },
];

const renderLineChart = (
  <>
    <LineChart
      width={400}
      height={200}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>
    <LineChart
      width={400}
      height={200}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>
    <LineChart
      width={400}
      height={200}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>
    <LineChart
      width={400}
      height={200}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>
  </>
);

const request = () =>
  fetch("http://192.168.137.253:3001/record", {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      const listItems = json.result.map((el) => (
        <tr key={el.idRecord}>
          <td>{el.idService}</td>
          <td>{el.timestamp}</td>
          <td>{el.state}</td>
        </tr>
      ));
      return listItems;
    });

function Connection() {
  const [postList, setPostList] = useState("Cargando...");

  useEffect(() => {
    request().then((data) => setPostList(data));
  }, []);

  return (
    <>
      <table className="down-services">
        <tbody>{postList}</tbody>
      </table>
    </>
  );
}

const ErrorHistory: React.FC = () => {
  return (
    <>
      <IonContent>
        <div className="graphic">{renderLineChart}</div>
        <Connection />
      </IonContent>
    </>
  );
};

export default ErrorHistory;
